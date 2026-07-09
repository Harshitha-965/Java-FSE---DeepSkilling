package com.cognizant.orm_learn.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

import jakarta.transaction.Transactional;


@Service
public class CountryService {
    private final CountryRepository countryRepository;

    CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Transactional
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
}
