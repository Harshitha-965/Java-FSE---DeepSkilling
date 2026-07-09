# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Objective

The objective of this hands-on is to understand the relationship between **JPA**, **Hibernate**, and **Spring Data JPA**, and learn how they work together to simplify database operations in Java applications.

---

# Understanding the Evolution

Initially, developers used **JDBC** to communicate with databases. Although it worked well, it required writing a lot of repetitive code for creating connections, writing SQL queries, managing transactions, and closing resources.

To overcome these challenges, **ORM (Object Relational Mapping)** frameworks were introduced.

The evolution looks like this:

```
JDBC
   ↓
JPA (Specification)
   ↓
Hibernate (Implementation)
   ↓
Spring Data JPA (Abstraction)
```

---

# What is JPA?

**JPA (Java Persistence API)** is a Java specification (JSR 338) that defines a standard way to map Java objects to relational databases.

It only provides a set of rules and interfaces for persistence operations. It **does not contain any implementation**.

Think of JPA as a blueprint or a set of guidelines that ORM frameworks follow.

### Key Points

- Java Specification
- Defines standards for ORM
- No implementation
- Database independent

---

# What is Hibernate?

Hibernate is an **ORM (Object Relational Mapping) Framework** and one of the most popular implementations of JPA.

It converts Java objects into SQL queries and manages communication with the database automatically.

Instead of writing SQL manually, developers can work directly with Java objects.

### Key Points

- Implements JPA
- Automatically generates SQL
- Manages sessions and transactions
- Reduces JDBC boilerplate code

---

# What is Spring Data JPA?

Spring Data JPA is built on top of Hibernate.

It further simplifies database programming by providing repository interfaces such as **JpaRepository**, eliminating the need to write common CRUD operations manually.

Instead of handling sessions and transactions yourself, Spring Data JPA manages everything behind the scenes.

### Key Points

- Built on top of Hibernate
- Provides JpaRepository
- Automatic CRUD operations
- Less boilerplate code
- Easy integration with Spring Boot

---

# How They Work Together

```
Application
      │
      ▼
Spring Data JPA
      │
      ▼
Hibernate
      │
      ▼
JPA Specification
      │
      ▼
JDBC Driver
      │
      ▼
MySQL Database
```

---

# Code Comparison

## Using Hibernate

```java
Session session = factory.openSession();

Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();
```

Here, the developer is responsible for:

- Opening the session
- Beginning the transaction
- Saving the object
- Committing the transaction
- Closing the session

---

## Using Spring Data JPA

```java
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

Spring automatically handles:

- Session creation
- Transaction management
- SQL generation
- Resource cleanup

The developer simply calls:

```java
employeeRepository.save(employee);
```

---

# Comparison

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| Specification | ORM Framework | Spring Module |
| No implementation | Implements JPA | Uses Hibernate internally |
| Defines persistence rules | Converts objects to SQL | Simplifies database operations |
| Database independent | Generates SQL automatically | Provides JpaRepository and CRUD methods |

---

# Advantages of Spring Data JPA

- Less code to write
- Automatic CRUD operations
- Easy integration with Spring Boot
- Automatic transaction management
- Supports custom query methods
- Improves code readability and maintainability

---

