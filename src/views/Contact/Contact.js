import React from "react";
import { useNavigate } from "react-router-dom";

import Color from '../HOC/Color'
import useContact from '../customHook/useContact'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './contactSlice'
import { jobList } from "../../redux/selector";

const Contact = ()=>{
    const jobs = useSelector(jobList)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
 
    let navigate = useNavigate();
    const handleClick = ()=>{
            document.title(`Click ${count} times`)
    }
   
    return(
        <>
            <h3>My phone number: 0374470525 {count}</h3>
            <button onClick={() => dispatch(increment())}>Count</button>
            <ul>

                {jobs.length > 0 && jobs.map((item) => {
                    return (
                        <div key={item.id}>
                            <li >Name: {item.job} ---- Salary: {item.salary} </li>
                            {/* <button onClick={() => handleDeleteJob(item.id)}>Delete</button> */}
                        </div>
                    )
                })}
            </ul>
        </>
            
         )
}


export default (Contact)