import { useEffect,useState } from "react";
import React from "react";

const useContact = (init)=>{
    const [count,setCount] = useState(init)

    useEffect(()=>{
        console.log("Start hook ",init)
        
    },[count])

    return count
}
export default useContact