package com.techmaki.sushi_hub.payments.application.dtos;

import java.util.UUID;

public record PaymentResponse(
    Long id,
    Long orderId,
    UUID paymentCode,
    String paymentType,
    double amount,
    String paymentStatus
) {

}
