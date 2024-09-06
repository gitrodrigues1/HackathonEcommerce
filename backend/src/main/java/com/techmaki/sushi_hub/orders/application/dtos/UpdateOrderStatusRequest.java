package com.techmaki.sushi_hub.orders.application.dtos;

import com.techmaki.sushi_hub.orders.domain.entities.OrderStatus;

public record UpdateOrderStatusRequest(
    Long orderId,
    OrderStatus status
) {

}
