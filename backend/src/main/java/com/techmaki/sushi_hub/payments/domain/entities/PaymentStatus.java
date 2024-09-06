package com.techmaki.sushi_hub.payments.domain.entities;

public enum PaymentStatus {
    CONFIRMED("confirmed"),
    INCOMPLETE("incomplete"),
    INVALID("invalid"),;

    private final String status;

    private PaymentStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

}
