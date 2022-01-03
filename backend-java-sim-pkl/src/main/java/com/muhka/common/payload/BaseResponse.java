package com.muhka.common.payload;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class BaseResponse<T> implements Serializable {
    private static final  long serialVersionUID = -6233145663410668178L;

    private Integer code = 999;
    private String message;
    private T result;

    public BaseResponse(String message, Integer code, T result){
        this.code = code;
        this.message = message;
        this.result = result;
    }


    public BaseResponse(String message, Integer code){
        this.code = code;
        this.message = message;
        this.result = null;
    }

    public BaseResponse(String message) {
        this.message = message;
    }
}
