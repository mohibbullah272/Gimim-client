import { AuthContext } from "@/AuthProvider/AuthProvider";

import axios from "axios";
import { useContext, useEffect, useState } from "react";


const useCheckAdmin =() => {
    const {user} = useContext(AuthContext)
    const [isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
       axios.get(`http://localhost:1000/checkAdmin?email=${user?.email}`)
       .then(res=>setIsAdmin(res.data))
   
    },[user])


    return [isAdmin]
};

export default useCheckAdmin;