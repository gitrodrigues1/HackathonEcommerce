package com.techmaki.sushi_hub.orders.infrastructure.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.techmaki.sushi_hub.orders.domain.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query(value = "SELECT * FROM orders a INNER JOIN users b on a.user_id = b.id  WHERE b.id = :userId ORDER BY a.id", 
        nativeQuery = true)
    List<Order> findByUser(@Param("userId") Long userId);
}
