package com.muhka.model;

import com.muhka.common.auditable.ModelBase;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "kompetensi_keahlian")
public class KompetensiKeahlian extends ModelBase {

    @Column(name = "name")
    private String name;

}
