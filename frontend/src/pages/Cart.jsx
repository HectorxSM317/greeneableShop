import React from 'react'

export default function Cart() {
    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            description: 'lorem fjdslkfjdlksjfkldsjflkjdsa',
            color: 'Salmon',
            price: '$90.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            description: 'lorem fjdslkfjdlksjfkldsjflkjdsa',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        // More products...
    ]
    return (

        <div className="min-h-[60vh] flex items-center justify-center flex-col px-6">
            <div className='mt-[6rem]'>
                <h3>Current products in your cart:</h3>
            </div>
            {products?.length > 0 &&

                products?.map((product, i) => {
                    return (

                        <div className="product-box flex row bg-slate-200 p-5 items-center min-w-[90%] my-2">
                            <img className='max-h-[10rem]' src={product.imageSrc} alt="..." />
                            <div className='flex flex-col m-4 grow'>
                                <h4 className='font-bold'>{product.name}</h4>
                                <h3 className='font-bold'>{product.price}</h3>
                                <h4>Description:</h4>
                                <p>{product.imageAlt}</p>

                            </div>
                            <div className='flex flex-col m-2' >
                                <p>Amount:</p>
                                <input type="number" name="amount" id="amount" min={1} />
                                <button className='p-3 bg-red-600 rounded-md w-[10rem] text-white'>Remove from cart</button>
                                {/* el min es uno, el máx la cantidad de stock */}
                            </div>
                        </div>
                    )

                })}



            <div className='product-box w-[90%] flex row rounded-lg bg-slate-200 p-5 mt-6 items-center min-w-[10rem] mx-2 justify-around items-center'>
                <h4>Total:</h4>
                <button className='p-3 bg-green-300 rounded-md w-[10rem] my-4 text-white'>Buy</button>
                <button className='p-3 bg-red-600 rounded-md w-[10rem] my-4 text-white'>Empty Cart</button>

            </div>


        </div>
    )
}