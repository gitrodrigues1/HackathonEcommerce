package com.techmaki.sushi_hub.orders.domain.entities;

import com.techmaki.sushi_hub.orders.application.dtos.OrderItemRequest;
import com.techmaki.sushi_hub.orders.application.dtos.OrderItemResponse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderItem {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "discount")
    private double discount;

    @Column(name = "total_price", nullable = false)
    private double totalPrice;

    public static OrderItem toModel(OrderItemRequest request) {
        return OrderItem.builder()
            .productId(request.productId())
            .quantity(request.quantity())
            .price(request.price())
            .discount(request.discount())
            .totalPrice(request.totalPrice())
            .build();
    }

    public OrderItemResponse toResponse() {
        return new OrderItemResponse(quantity, quantity, productName, quantity, price, discount, totalPrice);
    }

}
