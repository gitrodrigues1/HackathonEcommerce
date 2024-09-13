package com.techmaki.sushi_hub.users.domain.entity;

import java.time.LocalDateTime;

import com.techmaki.sushi_hub.carts.domain.entities.Cart;
import com.techmaki.sushi_hub.users.application.dtos.UserResponse;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Email
    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Embedded
    private Address address;

    @Embedded
    private Phone phone;
    
    private boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Cart cart;

    public User(String name, String email, String password, UserRole role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.active = true;
        this.createdAt = LocalDateTime.now();
    }

    public UserResponse toResponse() {
        return new UserResponse(
            this.id, 
            this.name, 
            this.email, 
            this.phone.getPhoneNumber(), 
            this.address.getStreet(), 
            this.address.getNumber(), 
            this.address.getCity(), 
            this.address.getState(), 
            this.address.getZipCode());
    }

}

