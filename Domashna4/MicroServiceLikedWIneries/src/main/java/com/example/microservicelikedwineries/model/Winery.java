package com.example.microservicelikedwineries.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Winery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;

    String website;
    String phone;
    String email;
    String amenity;
    Double X;
    Double Y;
    String description;

    @Lob
    @Column(columnDefinition = "TEXT")
    @Basic(fetch = FetchType.EAGER)
    String url;

    public Winery(String name, String website, String phone, String email, String amenity, Double x, Double y,String url,String description) {
        this.name = name;
        this.website = website;
        this.phone = phone;
        this.email = email;
        this.amenity = amenity;
        X = x;
        Y = y;
        this.url=url;
        this.description=description;
    }

}
