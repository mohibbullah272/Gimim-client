import Cards from "@/Components/Cards";


const FeatureProduct = () => {
    return (
        <div className="my-20">
            <h3 className="text-3xl text-center mb-5 text-gray-800">~Feature Products~</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-10">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        </div>
        <div className="flex justify-end my-5 p-3 ">
            <button className="btn btn-outline">See More</button>
        </div>
        </div>
    );
};

export default FeatureProduct;