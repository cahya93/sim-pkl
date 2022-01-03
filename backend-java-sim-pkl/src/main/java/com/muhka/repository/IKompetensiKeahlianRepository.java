package com.muhka.repository;

import com.muhka.model.KompetensiKeahlian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IKompetensiKeahlianRepository extends JpaRepository<KompetensiKeahlian, Long> {
    KompetensiKeahlian getById(Long id);
}
