package com.seth174.chatGPTSocial.service;

import com.seth174.chatGPTSocial.repository.PeopleRepository;
import com.seth174.chatGPTSocial.shared.dto.person.PersonCreateDTO;
import com.seth174.chatGPTSocial.shared.entity.People;
import org.springframework.stereotype.Component;

import java.sql.SQLException;

@Component
public class PersonService {

    public PeopleRepository peopleRepository;

    public PersonService(PeopleRepository peopleRepository){
        this.peopleRepository = peopleRepository;
    }

    public People addPerson(PersonCreateDTO personCreateDTO){
        People newPeople = new People(
                personCreateDTO.getEmail(),
                personCreateDTO.getPhoneNumber(),
                personCreateDTO.getFirstName(),
                personCreateDTO.getLastName()
        );

        try{
            peopleRepository.save(newPeople);
        } catch (Exception e){
            throw new RuntimeException();
        }


        return newPeople;
    }
}
