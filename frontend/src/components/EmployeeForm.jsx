"use client";
import { useForm } from "react-hook-form";
import { useDialogStore } from "@/store/useDialogStore";
import { useEffect } from "react";
import { useEmployeesStore } from "@/store/useEmployeesStore";

export default function EmployeeForm({ type, title, employee }) {
  const hiddenDialog = useDialogStore((state) => state.hiddenDialog);
  const addNewEmployee = useEmployeesStore((state) => state.addEmployee);
  const updateEmployee = useEmployeesStore((state) => state.updateEmployee);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (type === "add") {
      addNewEmployee(data);
    } else if (type === "edit") {
      updateEmployee(employee.id, data);
    }

    hiddenDialog();
    reset();
  };

  useEffect(() => {
    if (employee) {
      setValue("firstName", employee.firstName);
      setValue("lastName", employee.lastName);
      setValue("email", employee.email);
      setValue("position", employee.position);
    }
  }, [employee]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div>
        <label className="block mb-1 text-gray-300">First Name</label>
        <input
          {...register("firstName", {
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" },
          })}
          className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1 text-gray-300">Last Name</label>
        <input
          {...register("lastName", {
            required: "El apellido es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" },
          })}
          className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1 text-gray-300">Email</label>
        <input
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          })}
          className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-1 text-gray-300">Position</label>
        <input
          {...register("position", {
            required: "El puesto es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" },
          })}
          className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.position && (
          <span className="text-red-500 text-sm">
            {errors.position.message}
          </span>
        )}
      </div>

      <div className="flex justify-center gap-2 pt-4">
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          type="button"
          onClick={() => {
            reset();
            hiddenDialog();
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
