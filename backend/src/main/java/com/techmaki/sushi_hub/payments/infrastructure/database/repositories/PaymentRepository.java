package com.techmaki.sushi_hub.payments.infrastructure.database.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmaki.sushi_hub.payments.domain.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
    Optional<List<Payment>> findPaymentsByOrderId(Long id);
}
