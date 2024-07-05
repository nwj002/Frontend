import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../apis/api";
import ProductCard from "../../components/ProductCard";


const Homepage = () => {
    //1. state for all fetched products
    const [products, setProducts] = useState([]) //array 

    //2. call api initially (page load) -set all fetch products to statem (1)
    useEffect(() => {
        getAllProducts().then((res) => {
            //response : res.data.products (all products\)
            setProducts(res.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <div className="container mt-3">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1718553964968-78e8b53dd062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Patterns pt.1</h5>
                                <p>This is my Pattern 1 image</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1718013102329-cc42f024bdf6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Pattern pt.2</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1717857253057-e70961be841d?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Pattern pt.3</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h2 className="mt-2">Available Products</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        products.map((singleProduct) => (
                            <div class="col">
                                <ProductCard productInformation={singleProduct} color={'green'} />
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default Homepage; 