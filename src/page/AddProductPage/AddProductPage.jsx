import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Product Schema Validation
const productSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  image: z.string().url("Valid image URL is required")
});

const AddProductPage = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(productSchema)
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_API}`, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        const uploadedImageUrl = result.data.url;
        setValue('image', uploadedImageUrl);
        setImagePreview(uploadedImageUrl);
      }
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };

  const onSubmit = (data) => {
    console.log('Product Data:', data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#FF9F1C] mb-8 uppercase tracking-wide">
          Adhesive Product Powerhouse
        </h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">
          Unleash Your Adhesive Innovation
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Name
            </label>
            <input
              {...register('productName')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB941]"
              placeholder="Enter product name"
            />
            {errors.productName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.productName.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Description
            </label>
            <textarea
              {...register('description')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB941]"
              placeholder="Describe your adhesive product"
              rows={4}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price (BDT)
              </label>
              <input
                type="number"
                {...register('price', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB941]"
                placeholder="Product price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Product Rating
              </label>
              <input
                type="number"
                step="0.1"
                {...register('rating', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB941]"
                placeholder="Rate product (0-5)"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB941]"
            />
            <input
              type="hidden"
              {...register('image')}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}

            {imagePreview && (
              <div className="mt-4">
                <img 
                  src={imagePreview} 
                  alt="Product Preview" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF9F1C] text-white py-3 rounded-lg hover:bg-[#FFB941] transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;