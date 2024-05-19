import React from 'react'


const AdminDashboard = () => {
    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin dashboard</h3>
                    <button className='btn btn-danger'>add product</button>

                </div>
                <table class="table ">
                    <thead class="thead-dark">
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
                            <td><img src="https://i.pinimg.com/736x/78/02/68/78026859287afe4c7add04906c7ecd13.jpg" style={{ height: 80, width: 80 }} alt="Product Image" class="img-fluid" /></td>
                            <td>Bibadh</td>
                            <td>$100.00</td>
                            <td>kuch bolunga tho bibad ho jayage.</td>
                            <td>voilence</td>
                            <td>
                                <button class="btn btn-primary btn-sm">Edit</button>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://i.pinimg.com/474x/ca/06/78/ca0678b7a013fda1d61dc9680c1216fb.jpg" style={{ height: 80, width: 80 }} alt="Product Image" class="img-fluid" /></td>
                            <td>Meow</td>
                            <td>$15.00</td>
                            <td>This is a short description of Product 2.</td>
                            <td>Category B</td>
                            <td>
                                <button class="btn btn-primary btn-sm">Edit</button>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AdminDashboard
