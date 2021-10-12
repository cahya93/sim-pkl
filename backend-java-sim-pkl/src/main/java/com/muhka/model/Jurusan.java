package com.muhka.model;

import javax.persistence.*;

@Entity
@Table(name = "jurusan")
public class Jurusan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "id_kompetensi")
    private int id_kompetensi;

    @Column(name = "name")
    private String name;

    public Jurusan(){

    }

    public Jurusan(int id_kompetensi, String name){
        this.id_kompetensi = id_kompetensi;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getId_kompetensi() {
        return id_kompetensi;
    }

    public void setId_kompetensi(int id_kompetensi) {
        this.id_kompetensi = id_kompetensi;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
