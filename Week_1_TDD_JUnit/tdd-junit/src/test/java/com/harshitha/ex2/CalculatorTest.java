package com.harshitha.ex2;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculatorTest {
    
    @Test
    public void testAddition(){
        Calculator calculator=new Calculator();
        assertEquals(8,calculator.add(5,3));
    }
}
