package com.seth174.chatGPTSocial.service;

import com.seth174.chatGPTSocial.repository.ModelRepository;
import com.seth174.chatGPTSocial.shared.dto.model.ModelDTO;
import com.seth174.chatGPTSocial.shared.entity.Model;

import java.util.Locale;

public class ModelService {
    private ModelRepository modelRepository;

    public ModelService(ModelRepository modelRepository){
        this.modelRepository = modelRepository;
    }

    public ModelDTO addModel(String name){
        ModelDTO modelDTO;
        try{
            modelDTO = findModelByName(name);
        } catch (Exception e){
            Model model = new Model(name);
            Model savedModel = modelRepository.save(model);
            modelDTO = new ModelDTO(savedModel.getId(), savedModel.getName());
        }

        return modelDTO;
    }

    public ModelDTO findModelByName(String name){
        Model model;
        try{
            model = modelRepository.findByName(name.toLowerCase(Locale.ROOT));
        } catch(Exception e){
            throw new RuntimeException();
        }
        return new ModelDTO(model.getId(), model.getName());
    }
}
