package com.seth174.chatGPTSocial.shared.entity;


import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class People extends BaseEntity {
    @Email(message = "Not valid email")
    @NotBlank(message = "Email required")
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;

}
