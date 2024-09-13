package com.techmaki.sushi_hub.carts.infrastructure.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.carts.domain.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long>{

}
