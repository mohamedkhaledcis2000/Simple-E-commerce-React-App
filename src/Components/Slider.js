import React from 'react'
import './Slider.css'
export default function Slider() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide container-fluid" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://lsgsoftwaresolutions.com/wp-content/uploads/2020/12/785054-ecommerce-istock-020119-1.jpg" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=740&t=st=1667393797~exp=1667394397~hmac=dd7b22a24cc1017c0fc27a04c9781040c0b85ce4664ab4c5a6a960c551a39f6f" className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
