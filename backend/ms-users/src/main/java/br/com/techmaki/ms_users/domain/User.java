package br.com.techmaki.ms_users.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private UserRole role;
    private boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public User(String username, String encryptedPassword, UserRole role) {
        this.name = username;
        this.password = encryptedPassword;
        this.role = role;
        this.active = true;
        this.createdAt = LocalDateTime.from(LocalTime.now());
        this.updatedAt = LocalDateTime.from(LocalTime.now());
    }
}
