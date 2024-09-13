package com.techmaki.sushi_hub.carts.application.dtos;

import java.util.List;

public record CartRequest(
    Long id,
    Long userId,
    List<CartItemRequest> items
) {

}
