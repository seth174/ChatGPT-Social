package com.seth174.chatGPTSocial.service;

import com.seth174.chatGPTSocial.repository.PersonRepository;
import com.seth174.chatGPTSocial.shared.dto.person.PersonCreateDTO;
import com.seth174.chatGPTSocial.shared.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person addPerson(PersonCreateDTO personCreateDTO){
        Person newPerson = new Person(
                personCreateDTO.getEmail(),
                personCreateDTO.getPhoneNumber(),
                personCreateDTO.getFirstName(),
                personCreateDTO.getLastName()
        );

        personRepository.save(newPerson);

        return newPerson;
    }
}
