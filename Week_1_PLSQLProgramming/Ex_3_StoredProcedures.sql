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
-- ------------------------------------------------------
-- Scenario 2
-- Implement an employee bonus scheme by updating the
-- salary of employees in a given department using a
-- bonus percentage passed as a parameter.
-- ------------------------------------------------------





-- ------------------------------------------------------
-- Scenario 3
-- Transfer a specified amount from one account to
-- another after verifying that the source account has
-- sufficient balance.
-- ------------------------------------------------------
