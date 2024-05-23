import React, { useState } from 'react';
{ }
const AdminDashboard = () => {
    //usestate
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCategory, setProductCategory] = useState('')
    // state for image
    const [productImage, setProductImage] = useState('')
    // state for image preview
    const [previewImage, setImagePreview] = useState('')

    //image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file) // for backend
        setImagePreview(URL.createObjectURL(file)) // for frontend
    }

    //handle sumbit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productName, productPrice, productDescription, productCategory, productImage)
    }


    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h3>Admin Dashboard</h3>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Add Product
                    </button>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add a new product</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form action=''>
                                    <label className='mt-2'> Product name</label>
                                    <input onChange={(e) => setProductName(e.target.value)} type="text" className="form-control" placeholder="Enter product name" />

                                    <label className='mt-2'> Product Price</label>
                                    <input onChange={(e) => setProductPrice(e.target.value)} type="number" className="form-control" placeholder="Enter product price" />

                                    <label className='mt-2'> Product Description</label>
                                    <textarea onChange={(e) => setProductDescription(e.target.value)} className="form-control" />

                                    <label className='mt-2'> Product Category</label>
                                    <select onChange={(e) => setProductCategory(e.target.value)} className='form-control' >
                                        <option value="" disabled selected>Select a category</option>
                                        <option value="beer">Beer</option>
                                        <option value="wine">Wine</option>
                                        <option value="whiskey">Whiskey</option>
                                        <option value="vodka">Vodka</option>
                                        <option value="rum">Rum</option>
                                        <option value="gin">Gin</option>
                                    </select>

                                    <label className='mt-2'>Choose product Image</label>
                                    <input onChange={handleImage} type="file" className='form-control' />

                                    {/* preview image */}
                                    {
                                        previewImage && <img src={previewImage} alt="Product" className="img-fluid rounded mt-2" />
                                    }
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src="https://i.pinimg.com/736x/78/02/68/78026859287afe4c7add04906c7ecd13.jpg"
                                    alt="Product"
                                    className="img-fluid"
                                    style={{ height: 80, width: 80 }}
                                />
                            </td>
                            <td>Bibadh</td>
                            <td>$100.00</td>
                            <td>Kuch bolunga tho bibad ho jayage.</td>
                            <td>Violence</td>
                            <td>
                                <button className="btn btn-primary btn-sm">Edit</button>
                                <button className="btn btn-danger btn-sm ms-2">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="https://i.pinimg.com/474x/ca/06/78/ca0678b7a013fda1d61dc9680c1216fb.jpg"
                                    alt="Product"
                                    className="img-fluid"
                                    style={{ height: 80, width: 80 }}
                                />
                            </td>
                            <td>Meow</td>
                            <td>$15.00</td>
                            <td>This is a short description of Product 2.</td>
                            <td>Category B</td>
                            <td>
                                <button className="btn btn-primary btn-sm">Edit</button>
                                <button className="btn btn-danger btn-sm ms-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AdminDashboard;
