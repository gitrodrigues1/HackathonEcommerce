package br.com.techmaki.ms_users.repository;

import br.com.techmaki.ms_users.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findAllByActiveTrue();
}
