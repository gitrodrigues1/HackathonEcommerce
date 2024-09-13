package com.techmaki.sushi_hub.orders.application.dtos;

import java.util.List;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record OrderRequest(
    
    @NotNull(message = "User cannot be null")
    Long userId,

    List<OrderItemRequest> items
) {


}
