package com.harshitha.ex1;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SampleTest {
    
    @Test
    public void testGetMessage(){
        Sample sample=new Sample();
        assertEquals("JUnit Setup Successful", sample.getMessage());
    }
}
