package com.techmaki.sushi_hub.orders.application.dtos;

public record OrderItemResponse (

    int itemId,
    long productId,
    String productName,
    int quantity,
    double price,
    double discount,
    double totalPrice
    ) {
}
