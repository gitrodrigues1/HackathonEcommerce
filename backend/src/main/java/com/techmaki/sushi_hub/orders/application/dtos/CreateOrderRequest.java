package com.techmaki.sushi_hub.orders.application.dtos;

import java.util.List;

import jakarta.validation.constraints.NotNull;

public record CreateOrderRequest(
    
    @NotNull
    Long userId,

    List<CreateOrderItemRequest> items
) {


}
