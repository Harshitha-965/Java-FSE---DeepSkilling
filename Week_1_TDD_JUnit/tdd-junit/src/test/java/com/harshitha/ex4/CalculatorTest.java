package com.harshitha.ex4;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    
    private Calculator calculator;

    @Before
    public void setUp(){
        System.out.println("Setting up Calculator...");
        calculator= new Calculator();
    }
    
    @After
    public void tearDown(){
        System.out.println("Cleaning up...");
        calculator=null;
    }

    @Test
    public void testAddition(){

        //Arrange
        int a=5;
        int b=3;
        
        //Act
        int result=calculator.add(a,b);
        
        //Assert
        assertEquals(8, result);

    }

}
