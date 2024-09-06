package com.techmaki.sushi_hub.payments.application.dtos;

import com.techmaki.sushi_hub.payments.domain.entities.PaymentType;

public record CreatePaymentRequest(
    Long orderId,
    PaymentType paymentType,
    Double amount

) {

}
