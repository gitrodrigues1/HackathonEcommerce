package com.techmaki.sushi_hub.orders.domain.entities;

import java.time.LocalDateTime;
import java.util.List;

import com.techmaki.sushi_hub.orders.application.dtos.OrderResponse;
import com.techmaki.sushi_hub.payments.domain.entities.Payment;
import com.techmaki.sushi_hub.users.domain.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "orders")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems;

    @OneToMany(mappedBy = "order")
    private List<Payment> payments; 

    @Column(name = "total_amount", nullable = false)
    private double totalAmount;

    private LocalDateTime updatedAt;

    public OrderResponse toResponse() {
        return new OrderResponse(id, orderDate, user.getId(), user.getName(), status.getStatus(), orderItems.stream().map(OrderItem::toResponse).toList(), totalAmount);
    }
}
