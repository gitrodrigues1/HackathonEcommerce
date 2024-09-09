package com.techmaki.sushi_hub.orders.application.controllers;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.techmaki.sushi_hub.orders.application.dtos.OrderRequest;
import com.techmaki.sushi_hub.orders.application.dtos.OrderResponse;
import com.techmaki.sushi_hub.orders.application.dtos.UpdateOrderRequest;
import com.techmaki.sushi_hub.orders.application.dtos.UpdateOrderStatusRequest;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.services.OrderService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/orders")
@Tag(name = "Orders Controller", description = "API Restful para cadastro de pedidos.")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest request) {
        var order = orderService.createOrder(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(order.id())
            .toUri();
        return ResponseEntity.created(location).body(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderResponse> updateOrder(@PathVariable Long id, @RequestBody UpdateOrderRequest request) {
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
