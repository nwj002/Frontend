import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getSingleProduct, updateProduct } from '../../../apis/api'

const UpdateProduct = () => {
    // get id from url
    const { id } = useParams()

    // get product information (Backend)
    useEffect(() => {
        getSingleProduct(id).then((res) => {
            // console.log(res.data)
            //res -> data (message name, success,product) -> (name, price, category, description)
            //res.data.product.productName
            setProductName(res.data.data.productName)
            setProductPrice(res.data.data.productPrice)
            setProductCategory(res.data.data.productCategory)
            setProductDescription(res.data.data.productDescription)
            setOldImage(res.data.data.productImage)

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    // fill all the info in each fields

    // make a use state
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // state for image
    const [productNewImage, setProductNewImage] = useState(null)
    const [previewNewImage, setPreviewNewImage] = useState(null)
    const [oldImage, setOldImage] = useState('')

    // image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductNewImage(file) // for backend
        setPreviewNewImage(URL.createObjectURL(file))
    }

    //update product handler
    const handleUpdateProduct = (event) => {
        event.preventDefault()
        //make a from data
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productNewImage)

        //api calling 
        updateProduct(id, formData).then((res) => {
            if (res.status === 201) {
                toast.success(res.data.message)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                toast.error(error.response.data.message)
            }
        })

    }

    return (
        <>
            <div className='container mt-3'>

                <h2>Update product for <span className='text-danger'>'{productName}'</span></h2>

                <div className='d-flex gap-3'>
                    <form action="">
                        <label >Product Name</label>
                        <input value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control' type="text" placeholder='Enter your product name' />

                        <label className='mt-2'>Product Price</label>
                        <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='form-control' type="number" placeholder='Enter your product name' />

                        <label className='mt-2'>Choose category</label>
                        <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                            <option value="" disabled selected>Select a category</option>
                            <option value="beer">Beer</option>
                            <option value="wine">Wine</option>
                            <option value="whiskey">Whiskey</option>
                            <option value="vodka">Vodka</option>
                            <option value="rum">Rum</option>
                            <option value="gin">Gin</option>
                        </select>

                        <label className='mt-2'>Enter description</label>
                        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>

                        <label className='mt-2'>Choose product Image</label>
                        <input onChange={handleImage} type="file" className='form-control' />

                        <button onClick={handleUpdateProduct} className='btn btn-danger w-100 mt-2'>Update Product</button>


                    </form>
                    <div className='image section'>
                        <h6>previewing old image</h6>
                        <img height={'150px'} width={'150px'} className='image-fluid rounded-8' src={`http://localhost:5000/products/${oldImage}`} alt="" />
                        {
                            previewNewImage && (
                                <>
                                    <h6 className='mt-3'>Previewing New Image</h6>
                                    <img height={'375px'} width={'300px'} className='image-fluid rounded-4 object-fit-cover' src={previewNewImage} alt="image" />
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default UpdateProduct
