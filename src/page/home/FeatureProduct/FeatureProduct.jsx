import Cards from "@/Components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";


const FeatureProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://gimim-server.vercel.app/feature/product`)
        .then(res=>setProducts(res.data))
    },[])
    return (
        <div className="my-20">
            <h3 className="text-3xl text-center mb-5 text-gray-800">~Feature Products~</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-10">
 {
    products.map(product=><Cards key={product._id} product={product}></Cards>)
 }
        </div>
      
        </div>
    );
};

export default FeatureProduct;