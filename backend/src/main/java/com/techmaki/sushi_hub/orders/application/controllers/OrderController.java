package com.techmaki.sushi_hub.orders.application.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techmaki.sushi_hub.orders.application.dtos.CreateOrderRequest;
import com.techmaki.sushi_hub.orders.application.dtos.UpdateOrderRequest;
import com.techmaki.sushi_hub.orders.application.dtos.UpdateOrderStatusRequest;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.services.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody CreateOrderRequest request) {
        var order = orderService.createOrder(request);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody UpdateOrderRequest request) {
        return ResponseEntity.ok().body(orderService.updateOrder(id, request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId) {
        return ResponseEntity.ok().body(orderService.getOrderById(orderId));
    }

    @PostMapping("status/update/{orderId}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable long orderId, UpdateOrderStatusRequest request) {
        return ResponseEntity.ok().body(orderService.updateOrderStatus(request));
    } 
}
