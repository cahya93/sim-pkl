package com.muhka.service.impl;

import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.CommonCode;
import com.muhka.common.payload.CommonMessage;
import com.muhka.common.payload.kompetensiKeahlian.RequestKompetensiKeahlianDTO;
import com.muhka.model.KompetensiKeahlian;
import com.muhka.repository.IKompetensiKeahlianRepository;
import com.muhka.service.IKompetensiKeahlian;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KompetensiKeahlianImpl implements IKompetensiKeahlian {

    @Autowired
    IKompetensiKeahlianRepository kompetensiKeahlianRepository;

    @Override
    public BaseResponse findAll() {
        try {
            List<KompetensiKeahlian> kompetensiKeahlianList = kompetensiKeahlianRepository.findAll();
            return new BaseResponse(CommonMessage.FOUND, CommonCode.SUCCESS, kompetensiKeahlianList);
        } catch (Exception e) {
            return new BaseResponse(CommonMessage.NOT_FOUND, CommonCode.NOT_FOUND);
        }
    }

    @Override
    public BaseResponse addKomptensi(RequestKompetensiKeahlianDTO kompetensiKeahlianDTO) {
        try {
            KompetensiKeahlian kompetensiKeahlian = new KompetensiKeahlian();

            kompetensiKeahlian.setName(kompetensiKeahlianDTO.getName());

            kompetensiKeahlianRepository.save(kompetensiKeahlian);

            return new BaseResponse(CommonMessage.SAVED, CommonCode.SUCCESS, kompetensiKeahlian);
        } catch (Exception e) {
            return new BaseResponse(CommonMessage.ERROR, CommonCode.BAD_REQUEST);
        }
    }
}
