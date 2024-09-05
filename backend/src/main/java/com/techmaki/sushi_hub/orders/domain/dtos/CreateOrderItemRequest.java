package com.techmaki.sushi_hub.orders.domain.dtos;

import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;

public record CreateOrderItemRequest(

    long productId,
    int quantity,
    double price,
    double totlaPrice
) {

    public OrderItem toModel() {
        return OrderItem.builder()
            .productId(productId)
            .quantity(quantity)
            .price(price)
            .build();
    }
}
