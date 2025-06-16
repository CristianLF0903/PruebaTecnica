'use client'
import { useEmployeesStore } from "@/store/useEmployeesStore"
export default function SearchBox() {

    const searchEmployees = useEmployeesStore((state) => state.searchEmployees)

    const onChangeHandle = (value) => {
        searchEmployees(value)
    }

    return (
        <div>
            <input
            type="search"
            name="searchEmployee"
            id="searchEmployee"
            placeholder="Search ..."
            className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>onChangeHandle(e.target.value)}
            />
        </div>
    )
}