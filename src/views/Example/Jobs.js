import React from 'react'
import jobsSlice from './jobsSlice'
import { useDispatch } from 'react-redux'




const Jobs = (props) => {
    const jobs = props.jobs
    const dispatch = useDispatch()

    const handleDeleteJob = (id) => {
        dispatch(
            jobsSlice.actions.jobDelete({
                id: id
            }))

    }

    return (
        <ul>
            
            {jobs.length >0 && jobs.map((item) => {
                return (
                    <div key={item.id}>
                        <li >Name: {item.job} ---- Salary: {item.salary} </li>
                        <button onClick={() => handleDeleteJob(item.id)}>Delete</button>
                    </div>
                )
            })}
        </ul>
    )
}


export class JobDetail extends React.Component {
    render() {

        return (

            <h3>Hello</h3>
        )
    }
}


export default Jobs
