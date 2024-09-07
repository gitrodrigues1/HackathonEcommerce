package com.techmaki.sushi_hub.orders.application.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record OrderItemRequest(

    int itemId,

    @NotNull
    long productId,

    @NotNull(message = "product name should not be null")
    String productName,

    @NotNull(message = "quantity should not be null")
    int quantity,

    @NotNull(message = "price should not be null")
    double price,

    double discount,

    @NotNull
    double totalPrice
) {

}
