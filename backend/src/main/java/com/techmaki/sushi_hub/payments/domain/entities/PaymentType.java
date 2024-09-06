package com.techmaki.sushi_hub.payments.domain.entities;

public enum PaymentType {
    PIX("pix"),
    DEBIT("debit"),
    CREDIT("credit"),
    CASH("cash"),;

    private final String status;

    private PaymentType(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

}
