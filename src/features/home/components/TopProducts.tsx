import { getTopProducts } from "../services/getTopProducts";

export default async function TopProducts() {
    const data = await getTopProducts();
    console.log(data, " product");

    // Agarda backend-dan array emas, { data: [...] } obyekt ko'rinishida kelsa:
    const products = Array.isArray(data) ? data : data?.data || [];

    return (
        <div className='max-w-[1240px] w-full mx-auto flex flex-col justify-center gap-8 pb-[100px] px-4'>
            {/* Header / Sarlavha qismi */}
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-[32px] text-gray-900'>Trending Products</h2>
                <button className='border border-black rounded-full px-6 py-2.5 font-medium hover:bg-black hover:text-white transition-colors cursor-pointer'>
                    View All
                </button>
            </div>

            {/* Mahsulotlar gridi */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch'>
                {products && products.length > 0 ? (
                    products.slice(0, 4).map((product) => {
                        // Rasm va ma'lumotlarni xavfsiz ajratib olish
                        const imageUrl = product?.images?.[0]?.url || "https://via.placeholder.com/300x300?text=No+Image";
                        const title = product?.name || "Mahsulot";
                        const description = product?.shortDescription || product?.description || "";
                        const price = product?.price ? product.price.toLocaleString("uz-UZ") : "0";
                        const oldPrice = product?.oldPrice ? product.oldPrice.toLocaleString("uz-UZ") : null;
                        const discount = product?.discountPercent || 0;
                        const rating = Math.round(product?.averageRating || 0);
                        const reviews = product?.reviewsCount || 0;

                        return (
                            <div 
                                key={product.id} 
                                className='bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300'
                            >
                                <div>
                                    {/* Rasm konteyneri (object-contain rasmni kesmaydi) */}
                                    <div className='relative w-full h-[200px] bg-[#f8f9fa] rounded-xl overflow-hidden mb-3 flex items-center justify-center p-2'>
                                        <img 
                                            src={imageUrl} 
                                            alt={title} 
                                            className='max-w-full max-h-full object-contain'
                                        />
                                        {/* Wishlist tugmasi */}
                                        <button className='absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 shadow-sm transition-colors cursor-pointer'>
                                            <svg className='w-4 h-4 fill-none stroke-current' viewBox='0 0 24 24' strokeWidth='2'>
                                                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Sarlavha */}
                                    <h3 className='font-bold text-base text-gray-900 leading-snug line-clamp-2 mb-1 min-h-[44px]' title={title}>
                                        {title}
                                    </h3>

                                    {/* Tavsif */}
                                    <p className='text-xs text-gray-500 line-clamp-2 mb-2 min-h-[32px]'>
                                        {description}
                                    </p>

                                    {/* Reyting va Izohlar */}
                                    <div className='flex items-center gap-1.5 mb-3'>
                                        <div className='flex text-amber-400'>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg 
                                                    key={star} 
                                                    className={`w-3.5 h-3.5 ${star <= rating ? "fill-current" : "text-gray-300 fill-current"}`} 
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className='text-xs text-gray-400 font-medium'>
                                            ({reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Narxlar va Chegirma */}
                                    <div className='mb-4'>
                                        <div className='flex items-baseline gap-2 flex-wrap'>
                                            <span className='text-lg font-extrabold text-emerald-600'>
                                                {price} so'm
                                            </span>
                                            {discount > 0 && (
                                                <span className='text-xs font-bold text-gray-900 ml-auto bg-gray-100 px-2 py-0.5 rounded'>
                                                    {discount}% Off
                                                </span>
                                            )}
                                        </div>
                                        {oldPrice && (
                                            <div className='text-xs text-gray-400 line-through mt-0.5'>
                                                ({oldPrice} so'm)
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Pastki Tugmalar */}
                                <div className='flex items-center justify-between gap-2 pt-3 border-t border-gray-100 mt-auto'>
                                    <button className='text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer'>
                                        View Details
                                    </button>
                                    <button className='bg-[#48bb78] hover:bg-[#38a169] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm'>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className='col-span-full text-center py-10 text-gray-500'>
                        Mahsulotlar topilmadi.
                    </div>
                )}
            </div>
        </div>
    );
}