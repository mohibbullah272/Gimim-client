import { AuthContext } from "@/AuthProvider/AuthProvider";

import axios from "axios";
import { useContext, useEffect, useState } from "react";


const useCheckAdmin = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true); // ✅ loading state
  
    useEffect(() => {
      if (user?.email) {
        axios
          .get(`https://gimim-server.vercel.app/checkAdmin?email=${user.email}`)
          .then((res) => {
            setIsAdmin(res.data.isAdmin);
            setAdminLoading(false); // ✅ stop loading after data comes
          })
          .catch(() => setAdminLoading(false)); // even on error, stop loading
      } else {
        setAdminLoading(false); // no user, no need to load
      }
    }, [user]);
  
    return [isAdmin, adminLoading];
  };
  

export default useCheckAdmin;