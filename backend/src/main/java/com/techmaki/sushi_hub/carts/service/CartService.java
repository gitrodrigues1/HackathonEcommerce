package com.techmaki.sushi_hub.carts.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.techmaki.sushi_hub.carts.application.dtos.CartRequest;
import com.techmaki.sushi_hub.carts.domain.entities.Cart;
import com.techmaki.sushi_hub.carts.domain.entities.CartItem;
import com.techmaki.sushi_hub.carts.domain.mappers.CartMapper;
import com.techmaki.sushi_hub.carts.infrastructure.database.repositories.CartItemRepository;
import com.techmaki.sushi_hub.carts.infrastructure.database.repositories.CartRepository;
import com.techmaki.sushi_hub.common.exceptions.ResourceNotFoundException;
import com.techmaki.sushi_hub.products.domain.Product;
import com.techmaki.sushi_hub.products.infrastructure.database.repositories.ProductRepository;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final CartMapper cartMapper;

    public CartService(
            CartRepository cartRepository,
            CartItemRepository cartItemRepository,
            CartMapper cartMapper,
            ProductRepository productRepository,
            UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.cartMapper = cartMapper;
    }

    CartRequest addToCart(Long userId, Long productId, Integer quantity) throws ResourceNotFoundException {
        User user = userRepository.findById(productId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found."));
        
        Cart cart = cartRepository.findByUserId(userId)
                .orElse(new Cart(null, user, new ArrayList<>()));

        Optional<CartItem> existingCartItem = cart.getItems().stream()
                .filter(i -> i.getProduct().getId().equals(productId))
                .findFirst();

        if(existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            cartItem.setQuantity(quantity);
        } else {
            CartItem cartItem = new CartItem(null, cart, product, quantity);
            cart.getItems().add(cartItem);
        }

        Cart savedCart = cartRepository.save(cart);
        return cartMapper.toRequest(savedCart);
    }

}
