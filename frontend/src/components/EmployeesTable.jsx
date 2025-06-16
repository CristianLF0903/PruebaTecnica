"use client";
import { useEmployeesStore } from "@/store/useEmployeesStore";
import Btn from "./Btn";
import { Suspense, useEffect, useState } from "react";

export default function EmployeesTable() {
  const employees = useEmployeesStore((state) => state.showEmployees);
  const [loading, setLoading] = useState(true);
  const getEmployees = useEmployeesStore((state) => state.fetchEmployees);

  useEffect(() => {
    getEmployees();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <p className="text-center text-white font-bold font-monospace">
        Loading...
      </p>
    );
  }

  return (
    <table className="table-water">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              {employee.firstName} {employee.lastName}
            </td>
            <td>{employee.email}</td>
            <td>{employee.position}</td>
            <td className="flex justify-center items-center gap-2">
              <Btn color="orange" type="edit" employee={employee}>
                Edit
              </Btn>
              <Btn color="red" type="delete" employee={employee}>
                Delete
              </Btn>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
