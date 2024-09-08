package com.techmaki.sushi_hub.products.application.rest.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.techmaki.sushi_hub.products.application.rest.dtos.ProductRequest;
import com.techmaki.sushi_hub.products.domain.Product;
import com.techmaki.sushi_hub.products.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
    
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductRequest request) {
        Product product = productService.createProduct(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(product.getId())
            .toUri();
        return ResponseEntity.created(location).body(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductRequest request) {
        Product product = productService.updateProduct(id, request);
        return ResponseEntity.ok().body(product);
    }

    @PostMapping("/status/{id}")
    public ResponseEntity<Product> updateProductStatus(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.updateProductStatus(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.findProductById(id);
        return ResponseEntity.ok().body(product);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAllProducts();
        return ResponseEntity.ok().body(products);
    }
}
