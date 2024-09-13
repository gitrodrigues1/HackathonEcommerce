package com.techmaki.sushi_hub.carts.application.dtos;

public record CartItemRequest(

    Long id,
    Long productId,
    Integer quantity
) {

}
