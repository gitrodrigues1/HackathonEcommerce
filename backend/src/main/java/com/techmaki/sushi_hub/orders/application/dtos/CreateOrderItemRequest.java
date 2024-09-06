package com.techmaki.sushi_hub.orders.application.dtos;

import jakarta.validation.constraints.NotNull;

public record CreateOrderItemRequest(

    @NotNull
    long productId,

    @NotNull
    int quantity,

    @NotNull
    double price,

    double discount,

    @NotNull
    double totalPrice
) {

}
