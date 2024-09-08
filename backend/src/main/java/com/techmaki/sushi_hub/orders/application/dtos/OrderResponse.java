package com.techmaki.sushi_hub.orders.application.dtos;

import java.time.LocalDateTime;
import java.util.List;

public record OrderResponse(
    Long id,
    LocalDateTime orderDate,
    Long userId,
    String userName,
    String status,
    List<OrderItemResponse> items,
    double totalAmount

) {
    
}
