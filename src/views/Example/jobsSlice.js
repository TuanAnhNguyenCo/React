import { createSlice } from "@reduxjs/toolkit";


const initData = {
    jobs: [
        { id: 1, job: "IT", salary: 1000 },
        { id: 2, job: "Tester", salary: 700 },
        { id: 3, job: "Project Manager", salary: 2000 },
        { id: 4, job: "Leader", salary: 1500 },
        { id: 5, job: "Manager", salary: 3000 },
    ],
    title: "Hello"

}


const jobsSlice = createSlice({
    name: 'jobs',
    initialState: initData,
    reducers: {
        jobDelete: (state, action) => {
            if (state.jobs)
                state.jobs = state.jobs.filter((item) => item.id !== action.payload.id)
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload)
        }

    },
}
)

export default jobsSlice