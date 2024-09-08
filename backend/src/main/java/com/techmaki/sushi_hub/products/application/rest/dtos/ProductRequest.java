package com.techmaki.sushi_hub.products.application.rest.dtos;

import com.techmaki.sushi_hub.products.domain.ProductSize;

public record ProductRequest(
    String name,
    String description,
    Double price,
    ProductSize size
) {

}
