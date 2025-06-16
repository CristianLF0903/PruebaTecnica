'use client'
import { useDialogStore } from "@/store/useDialogStore"
import EmployeeForm from "./EmployeeForm"
import DeleteForm from "./DeleteForm"

export default function Btn({color, type, employee, children}) {

    const showDialog = useDialogStore((state)=>state.showDialog)
    const setContentDialog = useDialogStore((state) => state.setContent)

    const newEmployee = () => {
        setContentDialog(<EmployeeForm title="New Employee" type="add"/>)
        showDialog()
    }

    const editEmployee = (employee) => {
        setContentDialog(<EmployeeForm title="Edit Employee" type="edit" employee={employee} />)
        showDialog()
    }

    const deleteEmployee = (employeeId) => {
        setContentDialog(<DeleteForm employeeId={employeeId}/>)
        showDialog()
    }

    const handleClick = () => {
        type === "new" ? newEmployee() : type === "edit" ? editEmployee(employee) : deleteEmployee(employee.id)
    }

    const bgColor = type === "new" ? "bg-blue-500 hover:bg-blue-400" : type === "edit" ? "bg-orange-500 hover:bg-orange-400" : "bg-red-500 hover:bg-red-400"

    const className = `${bgColor} text-white px-4 py-2 rounded-md`

    return (
        <button 
        className={className}
        onClick={handleClick}
        >
            {children}
        </button>
    )
}