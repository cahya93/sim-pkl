package com.muhka.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "image")
    private String image;

    @Column(name = "password")
    private String password;

    @Column(name = "role_id")
    private int role_id;

    @Column(name = "is_active")
    private int is_active;

    @Column(name = "id_user")
    private int id_user;

    @Column(name = "date_created")
    private long date_created;

    public Users(){

    }

    public Users(String name, String email, String image, String password, int role_id, int is_active, int id_user, long date_created){
        this.name = name;
        this.email = email;
        this.image = image;
        this.password = password;
        this.role_id = role_id;
        this.is_active = is_active;
        this.id_user = id_user;
        this.date_created = date_created;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRole_id() {
        return role_id;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }

    public int getIs_active() {
        return is_active;
    }

    public void setIs_active(int is_active) {
        this.is_active = is_active;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public long getDate_created() {
        return date_created;
    }

    public void setDate_created(long date_created) {
        this.date_created = date_created;
    }
}
