package com.techmaki.sushi_hub.orders.domain.dtos;

public record UpdateOrderItemRequest(
    Long orderId,
    Long productId,
    int quantity,
    double price,
    double discount
) {

}
