package com.techmaki.sushi_hub.orders.domain.entities;

public enum OrderStatus {
    WAITING_PAYMENT("waiting_payment"),
    PAYMENT_CONFIRMED("payment_donfirmed"),
    PROCESSING("processing"),
    OUT_FOR_DELIVERY("out_for_delivery"),
    DELIVERED("delivered"),
    CANCELED("canceled");

    private final String status;

    private OrderStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

}
