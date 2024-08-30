package com.sushihub.ms_products.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.engine.jdbc.Size;

@Table(name="product")
@Entity(name="Product")
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
    @Lob
    private byte[] picture;
    private String description;
    private String price;

    @Enumerated(EnumType.STRING)
    private Size size;

    private boolean promotion;

}
