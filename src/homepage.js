import React from 'react';
import './App.css';
import data from './data'
import {Link} from 'react-router-dom';

function homepage(props) {
    return (
    <div>
<header className="header">
<div className="container-fluid">
<nav className="navbar">
  <a className="navbar-brand">Print 24by7</a>
  <ul className="navbar-nav ">
   
      <li className="nav-item">
        <a className="nav-link" >Cart </a>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" >Login </a>
      </li>
     </ul>     
</nav>
<div className="main-heading">
  <h2><strong>All Things Are Printable</strong> </h2>
  <h4>Always Quality Printing</h4>
</div>
</div> 
</header> 
<div className="colorcase">
<div className="discover"><h2> DISCOVER PRODUCT </h2></div>
<div className="krish">
<div className="vasu">
 {
   data.products.map(product =>
    <div className="card">
  <div className="circle">
   <h2><Link to={'/products/' + product._id}>{product.name}</Link></h2>
  
  </div>
  <div className="content">
   <p> {product.paragraph}</p>
  <Link to={'/products/' + product._id}>Read more</Link>
  </div>
</div> 
   )}

</div>
</div>
<section className="product-images">
<ul className="image-showcase">
<li>
  <figure className="product-photo">
    <img src="/images/print8.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print7.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print6.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print5.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print4.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print3.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print10.jpg"alt="vasu"></img>
  </figure>
</li>
<li>
  <figure className="product-photo">
    <img src="/images/print9.jpg"alt="vasu"></img>
  </figure>
</li>
</ul>
</section>
<section className="test-space">
<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item review-slide active" data-interval="10000">
 <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum aliquam hendrerit. Nam et lacus pulvinar, efficitur felis eget, sollicitudin sem. Nunc vestibulum nisl nec.</h2>
 <img className="review-human" src="/images/human1.jpg"alt="vasu"></img>
</div>
<div className="carousel-item review-slide" data-interval="2000">
  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum aliquam hendrerit. Nam et lacus pulvinar, efficitur felis eget, sollicitudin sem. Nunc vestibulum nisl nec.</h2>
 <img className="review-human" src="/images/human2.jpg"alt="vasu"></img>
</div>
</div>
<a className="carousel-control-prev  review-slide" href="#carouselExampleInterval" role="button" data-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>

</a>
<a className="carousel-control-next  review-slide" href="#carouselExampleInterval" role="button" data-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>

</a>
</div>
</section>
</div>
</div>
    )
}
export default homepage;