package com.techmaki.sushi_hub.orders.domain.dtos;

public record CreateOrderItemRequest(

    long productId,
    int quantity,
    double price,
    double discount,
    double totalPrice
) {

}
