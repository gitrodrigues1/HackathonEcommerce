package com.techmaki.sushi_hub.orders.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.techmaki.sushi_hub.orders.domain.dtos.CreateOrderRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderItemRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderRequest;
import com.techmaki.sushi_hub.orders.domain.dtos.UpdateOrderStatusRequest;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderItemRepository;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        try {
            Order order = request.toModel();
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
        return orderRepository.findByUserId(id);
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
}
