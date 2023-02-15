package com.seth174.chatGPTSocial.shared.dto.person;

import lombok.Data;

@Data
public class PersonCreateDTO {
    private String email;
    private String phoneNumber;
    private String firstName;
    private String lastName;
}
