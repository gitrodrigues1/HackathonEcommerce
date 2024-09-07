package com.techmaki.sushi_hub.products.domain;

import com.techmaki.sushi_hub.products.application.rest.dtos.ProductRequest;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="products")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    // @Lob
    // private byte[] picture;
    private String description;
    private Double price;

    @Enumerated(EnumType.STRING)
    private ProductSize size;

    private boolean isActive;

    //private boolean promotion;

    public Product toModel(ProductRequest request) {
        return Product.builder()
            .name(request.name())
            .description(request.description())
            .size(request.size())
            .price(request.price())
            .build();
    }

}
