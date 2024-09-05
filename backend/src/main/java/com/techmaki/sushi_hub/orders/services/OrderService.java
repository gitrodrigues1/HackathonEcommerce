package com.techmaki.sushi_hub.orders.services;

import java.time.LocalDateTime;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.techmaki.sushi_hub.orders.domain.dtos.CreateOrderItemRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.CreateOrderRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderItemRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderStatusRequest;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;
import com.techmaki.sushi_hub.orders.domain.entities.OrderStatus;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderItemRepository;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderRepository;
import com.techmaki.sushi_hub.products.domain.Product;
import com.techmaki.sushi_hub.products.infrastructure.database.repositories.ProductRepository;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;

@Service
public class OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public Order createOrder(CreateOrderRequest request) {
        try {
            User user = userRepository.findById(request.userId()).get();
            Order order = Order.builder()
                .user(user)
                .orderDate(LocalDateTime.now())
                .status(OrderStatus.WAITING_PAYMENT)
                .orderItems(request.items().stream().map(x -> checkProduct(x)).toList())
                .build();

            order = calculateOrder(order);
            //search product by product id
            orderRepository.save(order);

            orderItemRepository.saveAll(order.getOrderItems());
            return order;
        } catch (Exception e) {
            logger.error("Failed to create order.", e);
        }
        return null;
    }

    public Order updateOrder(Long id, UpdateOrderRequest request) {
        Order order = orderRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        List<OrderItem> updatedItems = updateOrderItems(order.getOrderItems(), request.orderItems());
        order.setOrderItems(updatedItems);

        return calculateOrder(order);
    }

    public Order updateOrderStatus(UpdateOrderStatusRequest request) {
        return orderRepository.findById(request.orderId())
            .orElseThrow(() -> new IllegalArgumentException("Order not found"));
    }

   public  Order getOrderById(Long id) {
        return orderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Order not found."));
    }

    public List<Order> getAllOrdersByClient(Long id) {
        return orderRepository.findByUser(id);
    }

    private static List<OrderItem> updateOrderItems(List<OrderItem> items, List<UpdateOrderItemRequest> itemsRequest) {
        items.forEach((item) -> {
            itemsRequest.forEach((request) -> {
                if(request.discount() != item.getDiscount()) 
                    item.setDiscount(request.discount());
                if(request.quantity() != item.getQuantity()) 
                    item.setQuantity(request.quantity());
                if(request.price() != item.getPrice()) 
                    item.setPrice(request.price());
            });
        });
        return items;
    }

    private static Order calculateOrder(Order order) {
        order.getOrderItems().forEach((item) -> {
            item.setTotalPrice(item.getQuantity() * item.getPrice() * (1 - item.getDiscount() / 100.0));
        });

        double total = order.getOrderItems().stream()
            .mapToDouble(OrderItem::getTotalPrice)
            .reduce(0.0, Double::sum);
        order.setTotalAmount(total);
        return order;
    }

    private OrderItem checkProduct(CreateOrderItemRequest itemRequest) {
        Product product = productRepository.findById(itemRequest.productId())
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        OrderItem orderItem = OrderItem.toModel(itemRequest);
        orderItem.setProductName(product.getName());
        return orderItem;
    }

}
