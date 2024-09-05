package com.techmaki.sushi_hub.orders.infrastructure.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
