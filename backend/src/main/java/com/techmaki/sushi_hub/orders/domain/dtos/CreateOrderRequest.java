package com.techmaki.sushi_hub.orders.domain.dtos;

import java.util.List;

public record CreateOrderRequest(
    Long userId,
    List<CreateOrderItemRequest> items
) {


}
