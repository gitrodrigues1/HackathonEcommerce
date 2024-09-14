package com.techmaki.sushi_hub.orders.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import com.techmaki.sushi_hub.common.constants.OrderConst;
import com.techmaki.sushi_hub.common.constants.UserConst;
import com.techmaki.sushi_hub.orders.application.dtos.OrderRequest;
import com.techmaki.sushi_hub.orders.application.dtos.OrderResponse;
import com.techmaki.sushi_hub.orders.domain.entities.Order;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderItemRepository;
import com.techmaki.sushi_hub.orders.infrastructure.database.repositories.OrderRepository;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {

    @InjectMocks
    private OrderService orderService;

    @Mock
    private OrderRepository orderRepository;

    @Mock 
    private OrderItemRepository orderItemRepository;

    @Mock
    private UserRepository userRepository;

    private OrderRequest createOrderRequest;

    @BeforeEach
    void setUp() {
        createOrderRequest = OrderConst.REQUEST;
    }

    @Test
    void whenCreateAnOrderShouldReturnValidOrder() {
        Order order = OrderConst.ORDER;
        Mockito.when(orderRepository.save(any(Order.class))).thenReturn(order);

        User user = UserConst.USER_ADMIN;
        Mockito.when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));

        OrderResponse createOrder = orderService.createOrder(createOrderRequest);

        assertThat(createOrder).isNotNull();
    }

    @Test
    void whentestGetAllOrdersByClient() {
        
    }

    @Test
    void testGetOrderById() {

    }

    @Test
    void testUpdateOrder() {

    }

    @Test
    void testUpdateOrderStatus() {

    }
}
