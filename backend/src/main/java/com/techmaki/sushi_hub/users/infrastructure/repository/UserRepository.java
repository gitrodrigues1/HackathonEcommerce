package com.techmaki.sushi_hub.users.infrastructure.repository;

import java.util.List;
import java.util.Optional;

import com.techmaki.sushi_hub.users.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findAllByActiveTrue();
    Optional<User> findByEmail(String email);
}
