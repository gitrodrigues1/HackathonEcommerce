package com.techmaki.sushi_hub.orders.application.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.techmaki.sushi_hub.payments.application.dtos.CreatePaymentRequest;
import com.techmaki.sushi_hub.payments.domain.entities.Payment;
import com.techmaki.sushi_hub.payments.services.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<Payment> createPayment(@RequestBody CreatePaymentRequest request) {
        Payment payment = paymentService.createPayment(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(payment.getId())
            .toUri();
        return ResponseEntity.created(location).body(payment);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<List<Payment>> getPaymentsByOrderId(@PathVariable Long id) {
        return ResponseEntity.ok().body(paymentService.getPaymentsById(id));
    }
}
