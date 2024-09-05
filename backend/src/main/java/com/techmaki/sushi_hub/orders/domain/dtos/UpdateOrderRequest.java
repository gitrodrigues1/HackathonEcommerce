package com.techmaki.sushi_hub.orders.domain.dtos;

import java.util.List;

public record UpdateOrderRequest(
    Long id,
    List<UpdateOrderItemRequest> orderItems

) {

}
