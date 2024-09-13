package com.techmaki.sushi_hub.carts.infrastructure.database.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.carts.domain.entities.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{
    Optional<Cart> findByUserId(Long userId);
}
