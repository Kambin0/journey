package com.journey.travelManager.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity //ensure class is mapped to database
public class Destination implements Serializable { //allows class to be used in different type of strings (json, database)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private LocalDate date;
    private String location;
    private Integer milesTraveled;
    private Integer daysSpent;
    @Column(nullable = false, updatable = false)
    private String destinationCode;

public Destination() {}

public Destination(String location, LocalDate date, Integer milesTraveled, Integer daysSpent) {
    this.location = location;
    this.date = date;
    this.milesTraveled = milesTraveled;
    this.daysSpent = daysSpent;
}
public Long getId() {
return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getLocation() {
    return location;
}
public void setLocation(String location) {
    this.location = location;
}
public LocalDate getDate() {return date;}
    public void setDate(LocalDate date) {this.date = date;}
public Integer getMilesTraveled() {
    return milesTraveled;
}
public void setMilesTraveled(Integer milesTraveled) {
    this.milesTraveled = milesTraveled;
}
public Integer getDaysSpent() {
    return daysSpent;
}
public void setDaysSpent(Integer daysSpent) {
    this.daysSpent = daysSpent;
}
public String getDestinationCode() {
    return destinationCode;
}
    public String getFormattedDate() {
        // Format LocalDate to "Month Day, Year"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM d, yyyy");
        return date.format(formatter);
    }


public void setDestinationCode(String destinationCode) {
    this.destinationCode = destinationCode;
}

@Override
    public String toString() {
    return "destination{" +
            "id=" + id +
            ", location='" + location + '\'' +
            ", date='" + date + '\'' +
            ", milesTraveled='" + milesTraveled + '\'' +
            ", daysSpent='" + daysSpent + '\'' +
            ", destinationCode='" + destinationCode + '\'' +
            '}';

    }
}