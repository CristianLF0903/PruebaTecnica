import { create } from "zustand";
import EmployeesServices from "@/services/employeesServices";
import employeesServices from "@/services/employeesServices";

interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

interface EmployeesState {
  employees: Employee[];
  showEmployees: Employee[];
  message: any;
  fetchEmployees: () => void;
  addEmployee: (employee: Employee) => void;
  updateEmployee: (employeeId: number, employee: Employee) => void;
  deleteEmployee: (employeeId: number) => void;
  searchEmployees: (value: string) => void;
}

export const useEmployeesStore = create<EmployeesState>((set) => ({
  employees: [],
  showEmployees: [],
  message: {message: "", statusCode:200},
  fetchEmployees: () => {
    EmployeesServices.getAll().then((data) => {
      if (data.error) {
        set((state) => ({
          message: data,
        }));
      } else {
        set(() => ({ employees: data, showEmployees: data }));
      }
    });
  },
  addEmployee: (employee) =>
    EmployeesServices.create(employee).then((data) => {
      if (data.error) {
        set((state) => ({
          message: data,
        }));
      } else {
        set((state) => ({
          employees: [...state.employees, data],
          showEmployees: [...state.employees, data],
          message: { message: "Employee created successfully", statusCode: 200 },
        }));
      }
    }),
  updateEmployee: (employeeId, employee) =>
    EmployeesServices.update(employeeId, employee).then((data) => {
      if (data.error) {
        set((state) => ({
          message: data,
        }));
      } else {
        set((state) => ({
          employees: state.employees.map((e) => (e.id === data.id ? data : e)),
          showEmployees: state.employees.map((e) =>
            e.id === data.id ? data : e
          ),
          message: { message: "Employee updated successfully", statusCode: 200 },
        }));
      }
    }),
  deleteEmployee: (employeeId) =>
    employeesServices.remove(employeeId).then((data) => {
      if (data.error) {
        set((state) => ({
          message: data,
        }));
      } else {
        set((state) => ({
          employees: state.employees.filter((e) => e.id !== employeeId),
          showEmployees: state.employees.filter((e) => e.id !== employeeId),
          message: { message: "Employee deleted successfully", statusCode: 200 },
        }));
      }
    }),
  searchEmployees: (value) => {
    if (value != "") {
      set((state) => ({
        showEmployees: state.employees.filter(
          (e) =>
            e.firstName.toLowerCase().includes(value.toLowerCase()) ||
            e.lastName.toLowerCase().includes(value.toLowerCase()) ||
            e.position.toLowerCase().includes(value.toLowerCase())
        ),
      }));
    } else {
      set((state) => ({ showEmployees: state.employees }));
    }
  },
}));
