package com.techmaki.sushi_hub.users.services;

import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public List<User> getUsers() {
        return repository.findAllByActiveTrue();
    }

    public User getUser(Long id) {
        return repository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setActive(true);
        return repository.save(user);
    }

    public User updateUser(User user) {
        User userToUpdate = repository.findById(user.getId()).orElse(null);
        if (userToUpdate == null) {
            return null;
        }
        userToUpdate.setName(user.getName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setRole(user.getRole());
        userToUpdate.setUpdatedAt(LocalDateTime.now());
        return repository.save(userToUpdate);
    }

    public User deleteUser(Long id) {
        User user = repository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        user.setActive(false);
        return repository.save(user);
    }
}
