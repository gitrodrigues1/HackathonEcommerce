package br.com.techmaki.ms_users.infrastructure.database.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.techmaki.ms_users.domain.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findAllByActiveTrue();
    Optional<User> findByEmail(String email);
}
