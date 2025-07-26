import Cards from "@/Components/Cards";
import Title from "@/Components/Title";
import Skeleton from "@/Shared/Skeleton";
import useLazyLoadWithSkeleton from "@/Shared/useLazyLoadWithSkeleton";
import axios from "axios";
import { useEffect, useState } from "react";


const FeatureProduct = () => {
    const [ref,loaded]=useLazyLoadWithSkeleton()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://gimim-server.vercel.app/feature/product`)
        .then(res=>setProducts(res.data))
    },[])
    return (
        <div ref={ref}>
{
    loaded?<Skeleton></Skeleton>: <div className="my-20">
    <Title title={"Feature Product"} description={"Top-performing adhesives trusted by pros across Bangladesh. Explore our most reliable and in-demand products, handpicked for quality and performance"}></Title>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-10">
{
products.map(product=><Cards key={product._id} product={product}></Cards>)
}
  </div>

  </div>
}
       
        </div>
    );
};

export default FeatureProduct;