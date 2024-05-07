package com.mattsbarbosa.ems.repositories;

import com.mattsbarbosa.ems.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
