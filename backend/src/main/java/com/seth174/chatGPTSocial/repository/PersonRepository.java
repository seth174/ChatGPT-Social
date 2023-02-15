package com.seth174.chatGPTSocial.repository;

import com.seth174.chatGPTSocial.shared.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
