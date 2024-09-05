package com.techmaki.sushi_hub.orders.domain.dtos;

import java.time.LocalDateTime;
import java.util.List;

import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.domain.entities.OrderStatus;

public record CreateOrderRequest(
    String orderDate, 
    List<CreateOrderItemRequest> items
) {
    
    public Order toModel() {
        return Order.builder()
            .orderDate(LocalDateTime.now())
            .status(OrderStatus.WAITING_PAYMENT)
            .orderItems(items.stream().map(CreateOrderItemRequest::toModel).toList())
            .build();
    }

}
