package com.techmaki.sushi_hub.orders.application.dtos;

import java.util.List;

public record UpdateOrderRequest(

    List<UpdateOrderItemRequest> orderItems

) {

}
