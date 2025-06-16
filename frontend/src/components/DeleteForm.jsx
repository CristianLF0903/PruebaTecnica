import { useForm } from "react-hook-form";
import { useDialogStore } from "@/store/useDialogStore";
import { useEffect } from "react";
import { useEmployeesStore } from "@/store/useEmployeesStore";

export default function DeleteForm({ employeeId }) {
  const hiddenDialog = useDialogStore((state) => state.hiddenDialog);
  const deleteEmployee = useEmployeesStore((state) => state.deleteEmployee);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    deleteEmployee(parseInt(data.employeeId))
    hiddenDialog();
  };

  useEffect(() => {
    if (employeeId) {
      setValue("employeeId", employeeId);
    }
  }, [employeeId]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div>
        <label className="block mb-1 text-gray-300">
          ¿Estás seguro de que quieres eliminar este empleado?
        </label>
        <input type="hidden" {...register("employeeId")} />
      </div>
      <div className="flex justify-center gap-2 pt-4">
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          type="button"
          onClick={() => {
            hiddenDialog();
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
          type="submit"
        >
          Done
        </button>
      </div>
    </form>
  );
}
