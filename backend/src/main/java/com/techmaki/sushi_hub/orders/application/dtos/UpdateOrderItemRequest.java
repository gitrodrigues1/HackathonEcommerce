package com.techmaki.sushi_hub.orders.application.dtos;

public record UpdateOrderItemRequest(
    Long orderId,
    Long itemId,
    Long productId,
    Integer quantity,
    Double price,
    Double discount
) {

}
