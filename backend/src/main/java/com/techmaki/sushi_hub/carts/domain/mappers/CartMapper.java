package com.techmaki.sushi_hub.carts.domain.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.techmaki.sushi_hub.carts.application.dtos.CartItemRequest;
import com.techmaki.sushi_hub.carts.application.dtos.CartRequest;
import com.techmaki.sushi_hub.carts.domain.entities.Cart;
import com.techmaki.sushi_hub.carts.domain.entities.CartItem;

@Mapper(componentModel = "spring")
public interface CartMapper {

    @Mapping(source = "user.id", target = "userId")
    CartRequest toRequest(Cart cart);

    @Mapping(source = "userId", target = "user.id")
    Cart toModel(CartRequest cartRequest);

    @Mapping(source = "product.id", target = "productId")
    CartItemRequest toRequest(CartItem cartItem);

    @Mapping(source = "productId", target = "product.id")
    CartItem toModel(CartItemRequest cartItemRequest);
}
