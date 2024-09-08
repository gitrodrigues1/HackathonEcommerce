package com.techmaki.sushi_hub.users.application.dtos;

public record UserResponse(
    Long id,
    String name,
    String email,
    String phone,
    String street,
    String number,
    String city,
    String state,
    String zipCode
    )
{

}
