package com.techmaki.sushi_hub.payments.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderRepository;
import com.techmaki.sushi_hub.payments.application.dtos.CreatePaymentRequest;
import com.techmaki.sushi_hub.payments.application.dtos.PaymentResponse;
import com.techmaki.sushi_hub.payments.domain.entities.Payment;
import com.techmaki.sushi_hub.payments.domain.entities.PaymentStatus;
import com.techmaki.sushi_hub.payments.infrastructure.database.repositories.PaymentRepository;

@Service
public class PaymentService {
    
    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;

    public PaymentService(PaymentRepository paymentRepository, OrderRepository orderRepository) {
        this.paymentRepository = paymentRepository;
        this.orderRepository = orderRepository;
    }

    public PaymentResponse createPayment(CreatePaymentRequest request) {
        Order order = orderRepository.findById(request.orderId())
            .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        
        Payment payment = Payment.builder()
            .order(order)
            .paymentCode(UUID.randomUUID())
            .paymentType(request.paymentType())
            .amount(request.amount())
            .paymentStatus(handlePaymentStatus(order.getTotalAmount(), request.amount()))
            .build();
        
        return paymentRepository.save(payment).toResponse();
    }

    public List<Payment> getPaymentsById(Long id) {
        return paymentRepository.findPaymentsByOrderId(id).
            orElseThrow(() -> new IllegalArgumentException("Payment not found"));
    }

    private static PaymentStatus handlePaymentStatus(Double orderAmount, Double paymentAmount) {
        if(orderAmount.compareTo(paymentAmount) == 0) {
            return PaymentStatus.CONFIRMED;
        }

        return PaymentStatus.INCOMPLETE;
    }
    
}
