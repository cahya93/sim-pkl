package com.muhka.endpoint;

import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.kompetensiKeahlian.RequestKompetensiKeahlianDTO;
import com.muhka.service.IKompetensiKeahlian;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;

import static com.muhka.common.payload.CommonJWT.PREFIX;
import static com.muhka.common.payload.CommonJWT.SECRET;

@RestController
@RequestMapping("api/v1/kompetensi-keahlian")
public class KompetensiKeahlianEndPoint {

    @Autowired
    IKompetensiKeahlian kompetensiKeahlian;

    @GetMapping("")
    public BaseResponse findAllKomptensiKeahlian(){
        return kompetensiKeahlian.findAll();
    }

    @PostMapping("/add-kompetensi")
    public BaseResponse addKomptensi(
            @RequestBody RequestKompetensiKeahlianDTO kompetensiKeahlianDTO,
            @RequestHeader("Authorization") String header){
        String jwtToken = header.replace(PREFIX, "");
        Claims claims = Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwtToken).getBody();
        String user = claims.get("sub").toString();

        return kompetensiKeahlian.addKomptensi(kompetensiKeahlianDTO);

    }
}
