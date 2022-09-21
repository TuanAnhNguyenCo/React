import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import jobsSlice from "./jobsSlice";


const AddJobs = () => {
    const dispatch = useDispatch()
    const [job, setJob] = useState('')
    const [salary, setSalary] = useState('')

    const handleJob = (e) => {
        setJob(e.target.value)
    }
    const handleSalary = (e) => {
        setSalary(e.target.value)
    }
    const handleClick = (e) => {
        if (!job || !salary) {
            alert("Please enter info")
            return;
        }


        let addJobs = {
            id: uuidv4(),
            job: job,
            salary: salary
        }
        dispatch(jobsSlice.actions.addJob(addJobs))
        setJob('')
        setSalary('')
    }
    return (
        <>
            <form >
                <label htmlFor="job-name">Job:</label><br />
                <input type="text" id="job-name" value={job} onChange={(e) => handleJob(e)} /><br />
                <label htmlFor="salary">Salary:</label><br />
                <input type="text" id="salary" value={salary} onChange={(e) => handleSalary(e)} /><br />
                <input type="button" value="Add" onClick={(e)=>handleClick(e)} />
            </form>
        </>
    )
}




export default AddJobs