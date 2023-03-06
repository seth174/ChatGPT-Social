package com.seth174.chatGPTSocial.shared.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Like extends BaseEntity{
    @NotBlank
    private byte deleted;

    @Column(name = "post_id")
    private long postId;
    @ManyToOne
    private People people;
}
