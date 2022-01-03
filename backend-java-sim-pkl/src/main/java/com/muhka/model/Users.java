package com.muhka.model;

import com.muhka.common.auditable.AuditableBase;
import com.muhka.common.auditable.ModelBase;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "users")
public class Users extends ModelBase {

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "role_id")
    private int roleId;

    @Column(name = "is_active")
    private int isActive;

    @CreatedDate
    @Column(name = "date_created")
    private Date date_created;

}
