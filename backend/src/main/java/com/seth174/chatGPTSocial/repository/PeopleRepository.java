package com.seth174.chatGPTSocial.repository;

import com.seth174.chatGPTSocial.shared.entity.People;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepository extends JpaRepository<People, Long> {
}
