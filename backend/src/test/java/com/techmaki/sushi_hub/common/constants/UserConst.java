package com.techmaki.sushi_hub.common.constants;

import com.techmaki.sushi_hub.users.domain.entity.Address;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.domain.entity.UserRole;


public final class UserConst {

    public static final User USER_ADMIN = User.builder()
        .id(1L)
        .name("User Test")
        .email("test@mail.com")
        .password("1234")
        .role(UserRole.ADMIN)
        .address(new Address("street test", "12T", "Los Tests", "TST", "00000000"))
        .build();
}
