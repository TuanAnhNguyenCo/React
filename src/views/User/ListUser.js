import axios from 'axios';
import React from 'react';
import {
   
    Outlet,
   
  } from "react-router-dom";


class ListUser extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {users:[]}
    }

    
    componentDidMount() {

        let self = this;
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                self.setState({users: response.data.data})
                })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
           
        let {users} = this.state
        return(
            <>
            
                <ul>
                    {users.length > 0  && users.map((user,index) =>{
                        return(
                            <div key={user.id}>
                                    <li > {user.id} - {user.first_name} - {user.last_name}</li> 
                            </div>   
                        )
                    })}
                   
                </ul>
                <Outlet/>
            </>
                
        )
        
    }
}


export default ListUser