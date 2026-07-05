-- ======================================================
-- Exercise 3 : Stored Procedures
-- ======================================================

-- ------------------------------------------------------
-- Scenario 1
-- Process monthly interest for all savings accounts.
-- Apply a 1% interest rate to the current balance of
-- every savings account.
-- ------------------------------------------------------
SET SERVEROUTPUT ON

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
    CURSOR account_cursor IS
        SELECT ACCOUNTID,BALANCE
        FROM ACCOUNTS
        WHERE ACCOUNTTYPE = 'Savings';
BEGIN
    FOR account_record IN account_cursor LOOP

        UPDATE ACCOUNTS
        SET BALANCE = BALANCE*1.01
        WHERE ACCOUNTID = account_record.ACCOUNTID;

        DBMS_OUTPUT.PUT_LINE(
            'Interest applied to Account ' ||
            account_record.ACCOUNTID
        );
    END LOOP;
    COMMIT;
END;
/

EXEC ProcessMonthlyInterest;
-- ------------------------------------------------------
-- Scenario 2
-- Implement an employee bonus scheme by updating the
-- salary of employees in a given department using a
-- bonus percentage passed as a parameter.
-- ------------------------------------------------------
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percentage IN NUMBER
)
IS

BEGIN
    UPDATE EMPLOYEES
    SET SALARY = SALARY + (SALARY * p_bonus_percentage/100)
    WHERE DEPARTMENT = p_department;

    DBMS_OUTPUT.PUT_LINE(
    p_bonus_percentage ||
    '% Bonus applied successfully to '
    || p_department
    || ' department.'
    );
    COMMIT;
END;
/

EXEC UpdateEmployeeBonus('IT',10);
-- ------------------------------------------------------
-- Scenario 3
-- Transfer a specified amount from one account to
-- another after verifying that the source account has
-- sufficient balance.
-- ------------------------------------------------------
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    SELECT BALANCE INTO v_balance
    FROM ACCOUNTS 
    WHERE ACCOUNTID = p_from_account;

    IF v_balance >= p_amount THEN
        
        UPDATE ACCOUNTS 
        SET BALANCE = BALANCE - p_amount
        WHERE ACCOUNTID = p_from_account;

        UPDATE ACCOUNTS
        SET BALANCE = BALANCE + p_amount
        WHERE ACCOUNTID = p_to_account;

        DBMS_OUTPUT.PUT_LINE(
            'Funds transfered successfully from Account ID ' ||
            p_from_account || ' to Account ID ' || p_to_account
        );
    ELSE
        DBMS_OUTPUT.PUT_LINE(
            'Insufficient Balance'
        );
    END IF;
    COMMIT;
END;
/

EXEC TransferFunds(1,2,500);