package com.harshitha.ex2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {
    private static final Logger logger= LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String args[]){
        String username = "Harshitha";
        int age = 21;

        logger.info("User {} logged in successfully.",username);
        logger.info("User {} is {} years old.",username,age);
    }
}
