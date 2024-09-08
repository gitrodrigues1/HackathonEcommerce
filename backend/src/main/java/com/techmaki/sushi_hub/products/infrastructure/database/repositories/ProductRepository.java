package com.techmaki.sushi_hub.products.infrastructure.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.products.domain.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    boolean existsProductByName(String name);
}
