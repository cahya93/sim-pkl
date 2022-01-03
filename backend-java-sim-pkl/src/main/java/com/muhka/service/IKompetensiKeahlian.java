package com.muhka.service;

import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.kompetensiKeahlian.RequestKompetensiKeahlianDTO;

public interface IKompetensiKeahlian {

    BaseResponse findAll();

    BaseResponse addKomptensi(RequestKompetensiKeahlianDTO kompetensiKeahlianDTO);
}
