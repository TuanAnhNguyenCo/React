import React from "react";
import Jobs from "./Jobs";
import AddJobs from "./AddJobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { jobList } from "../../redux/selector";


const MyComponent = () => {
    const jobs = useSelector(jobList)
    
    return (
        <>
            <Jobs jobs={jobs} ></Jobs>
            <AddJobs></AddJobs>
        </>
    )
}
export default MyComponent
