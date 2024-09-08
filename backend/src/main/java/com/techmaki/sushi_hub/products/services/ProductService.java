package com.techmaki.sushi_hub.products.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.techmaki.sushi_hub.products.application.rest.dtos.ProductRequest;
import com.techmaki.sushi_hub.products.domain.Product;
import com.techmaki.sushi_hub.products.infrastructure.database.repositories.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(ProductRequest request) {
        if(productRepository.existsProductByName(request.name())) {
            throw new IllegalArgumentException("Product already exists");
        }
        Product product = new Product().toModel(request);
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, ProductRequest request) {
        Product foundProduct = productRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        if(request.name() != null) foundProduct.setName(request.name());
        if(request.description() != null) foundProduct.setDescription(request.description());
        if(request.price() != null) foundProduct.setPrice(request.price());
        if(request.size() != null) foundProduct.setSize(request.size());

        return productRepository.save(foundProduct);
    }

    public Product updateProductStatus(Long id) {
        Product foundProduct = productRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        
        foundProduct.setActive(!foundProduct.isActive());
        
        return productRepository.save(foundProduct);
    }

    public Product findProductById(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Product not found"));
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

}
