package com.seth174.chatGPTSocial.controller;

import com.seth174.chatGPTSocial.service.PersonService;
import com.seth174.chatGPTSocial.shared.dto.person.PersonCreateDTO;
import com.seth174.chatGPTSocial.shared.entity.People;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/v1/person")
public class PersonController {
    private final PersonService personService;

    public PersonController(PersonService personService){
        this.personService = personService;
    }

    @PostMapping()
    public @ResponseBody
    People savePerson(@RequestBody PersonCreateDTO personCreateDTO){
        return personService.addPerson(personCreateDTO);
    }

}
