package com.seth174.chatGPTSocial.repository;

import com.seth174.chatGPTSocial.shared.entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
    public Model findByName(String name);
}
