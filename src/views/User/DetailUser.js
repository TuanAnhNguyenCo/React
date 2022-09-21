import React from "react";
import { useParams } from "react-router-dom";


const DetailUser = ()=>{
    let params = useParams()
    return(
        
        <div>Xin chao {params.id}</div>
    )
}

export default DetailUser