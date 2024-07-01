package com.journey.travelManager.service;

import com.journey.travelManager.exception.DestinationNotFoundException;
import com.journey.travelManager.model.Destination;
import com.journey.travelManager.repo.DestinationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DestinationService {
    private final DestinationRepo destinationRepo;

    @Autowired
    public DestinationService(DestinationRepo destinationRepo) {
        this.destinationRepo = destinationRepo;
    }

    public Destination addDestination(Destination destination) {
        destination.setDestinationCode(UUID.randomUUID().toString());
        return destinationRepo.save(destination);
    }
    public List<Destination> findAllDestinations() {
        return destinationRepo.findAll();
    }
    public Destination updateDestination (Destination destination) {
        return destinationRepo.save(destination);
    }
    public Destination findDestinationById (Long id) {
        return destinationRepo.findDestinationById(id)
                .orElseThrow(() -> new DestinationNotFoundException("destination by id " + id + "was not found"));
    }
    public void deleteDestination(Long id) {
        destinationRepo.deleteDestinationById(id);
    }
}
