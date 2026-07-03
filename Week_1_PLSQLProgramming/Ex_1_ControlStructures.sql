-- ======================================================
-- Exercise 1 : Control Structures
-- ======================================================

-- ------------------------------------------------------
-- Scenario 1
-- Apply a 1% discount to loan interest rates for
-- customers above 60 years old.
-- ------------------------------------------------------
SET SERVEROUTPUT ON;

DECLARE
    v_age NUMBER;
    CURSOR customer_cursor IS
        SELECT CUSTOMERID,DOB
        FROM CUSTOMERS;
BEGIN
    FOR customer_record IN customer_cursor LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE,customer_record.DOB) / 12);

        DBMS_OUTPUT.PUT_LINE(
            'Customer ID: ' || customer_record.CUSTOMERID ||
            ' Age: ' || v_age
        );

        if v_age > 60 THEN

            UPDATE LOANS
            SET INTERESTRATE = INTERESTRATE-1
            WHERE CUSTOMERID = customer_record.CUSTOMERID;

            DBMS_OUTPUT.PUT_LINE(
                'Interest rate updated.'
            );

        END IF;
    END LOOP;
END;
/
-- ------------------------------------------------------
-- Scenario 2
-- Promote customers with balance greater than $10,000
-- to VIP status.
-- ------------------------------------------------------



-- ------------------------------------------------------
-- Scenario 3
-- Send reminders to customers whose loans are due
-- within the next 30 days.
-- ------------------------------------------------------