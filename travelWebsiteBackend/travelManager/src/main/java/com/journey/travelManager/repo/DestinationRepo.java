package com.journey.travelManager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.journey.travelManager.model.Destination;

import java.util.Optional;

public interface DestinationRepo extends JpaRepository<Destination, Long> {
    void deleteDestinationById(Long id);

    Optional<Destination> findDestinationById(Long id);
}
