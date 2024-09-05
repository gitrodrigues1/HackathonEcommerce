package com.techmaki.sushi_hub.products.domain;

import jakarta.persistence.*;
import lombok.*;

@Table(name="products")
@Entity
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
    private String price;

    @Enumerated(EnumType.STRING)
    private ProductSize size;

    //private boolean promotion;

}
