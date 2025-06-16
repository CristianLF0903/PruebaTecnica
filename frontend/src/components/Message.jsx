'use client'

import { useEffect, useState } from "react";
import { useEmployeesStore } from "@/store/useEmployeesStore";

export default function Message() {
    const {message, statusCode} = useEmployeesStore((state) => state.message);
    const [isVisible, setIsVisible] = useState(false);

    const bgColor = statusCode === 200 ? "bg-green-500" : "bg-red-500";
    const textColor = statusCode === 200 ? "text-white" : "text-red-500";

    useEffect(() => {
        if(message){setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);}
    },[message])

    return (<div className={`${bgColor} ${textColor} p-2 rounded-md mb-6 transition-all duration-300 ease-in-out ${isVisible ? "visible" : "hidden"} `}>
        {message}
    </div>)


}