package com.techmaki.sushi_hub.orders.infrastructure.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{
    List<OrderItem> findOrderItemByOrderId(Long orderId);
}
