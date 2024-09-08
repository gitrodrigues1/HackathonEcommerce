package com.techmaki.sushi_hub.common.constants;

import static com.techmaki.sushi_hub.common.constants.UserConst.USER_ADMIN;

import java.time.LocalDateTime;
import java.util.List;

import com.techmaki.sushi_hub.orders.application.dtos.OrderItemRequest;
import com.techmaki.sushi_hub.orders.application.dtos.OrderRequest;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.domain.entities.OrderItem;
import com.techmaki.sushi_hub.orders.domain.entities.OrderStatus;

public class OrderConst {

    public static final OrderItemRequest ITEM_REQUEST = OrderItemRequest.builder()
    .productId(1L)
    .productName("test product")
    .quantity(1)
    .price(10.0)
    .discount(0.0)
    .totalPrice(10.0)
    .build();

    public static final OrderRequest REQUEST =  OrderRequest.builder()
        .userId(1L)
        .items(List.of(ITEM_REQUEST))
        .build();

    public static final Order ORDER = Order.builder()
        .user(USER_ADMIN)
        .orderDate(LocalDateTime.now())
        .status(OrderStatus.WAITING_PAYMENT)
        .orderItems(null)
        .build();

    public static final OrderItem ORDER_ITEM = OrderItem.builder()
        .itemId(1L)
        .order(ORDER)
        .productId(1L)
        .productName("test product")
        .quantity(1)
        .price(10.0)
        .discount(0.0)
        .totalPrice(10.0)
        .build();
}
