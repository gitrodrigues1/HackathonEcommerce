package com.techmaki.sushi_hub.products.application.rest.dtos;

import com.techmaki.sushi_hub.products.domain.ProductSize;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record ProductRequest(

    @NotBlank(message = "Product name is required")
    String name,

    @NotBlank(message = "Product description is required")
    String description,

    @Positive(message = "Price cannot be negative")
    Double price,
    
    ProductSize size
) {

}
