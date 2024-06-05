import React from 'react'

const Demo = () => {
  return (
    <div>
      <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="card h-100">
                            <div className="card-header">
                                <h3 className="text-center">Create Your Account</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label htmlFor="fullname" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullname"
                                            name="fullname"
                                        />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                        />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="age"
                                            name="age"
                                        />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"

                                        />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                        />

                                    </div>
                                    <div className="mb-2 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="acceptTerms"
                                            name="acceptTerms"

                                        />
                                        <label className="form-check-label" htmlFor="acceptTerms">
                                            I accept the terms and conditions
                                        </label>

                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="card h-100">
                            <Carousel controls={false} indicators={false} interval={5000}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1716796198677-eee1faed3b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Heading 1</h3>
                                        <p>Paragraph 1</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/600x400"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Heading 2</h3>
                                        <p>Paragraph 2</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/600x400"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Heading 3</h3>
                                        <p>Paragraph 3</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Demo
