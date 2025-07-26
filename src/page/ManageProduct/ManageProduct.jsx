import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch products from API
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://gimim-server.vercel.app/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setLoading(true);
            try {
                await axios.delete(`https://gimim-server.vercel.app/products/${productId}`);
                setProducts(products.filter(product => product._id !== productId));
                toast.success('Product deleted successfully!');
            } catch (error) {
                console.error('Error deleting product:', error);
                toast.error('Failed to delete product');
            } finally {
                setLoading(false);
            }
        }
    };







    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-orange-500">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Plus className="w-5 h-5 text-white" />
                        </div>
                        Product Management
                    </h1>
                    <p className="text-gray-600 mt-2">Manage your product inventory with ease</p>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Image</th>
                                    <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                                    <th className="px-6 py-4 text-center font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={product._id} className={`hover:bg-orange-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <td className="px-6 py-4">
                                            <img 
                                                src={product.image} 
                                                alt={product.productName}
                                                className="w-16 h-16 rounded-lg object-cover shadow-md"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-gray-800">{product.productName}</div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                {product.description?.substring(0, 50)}...
                                            </div>
                                        </td>
                              
                              
                        
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2 justify-center">
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors duration-200 group"
                                                    disabled={loading}
                                                >
                                                    <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {products.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-lg">No products found</div>
                        </div>
                    )}
                </div>
            </div>

    
        </div>
    );
};

export default ManageProduct;