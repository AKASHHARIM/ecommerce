import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Productlist() {
  const[product,setProduct]=useState([])
  const fetchData=async ()=>{
    var data=await fetch('https://fakestoreapi.com/products')
    data=await data.json();
    // .then(data=>setProduct(data))
           setProduct(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(product);
  return (
    <div>
        <Container fluid>
      <Row>
        <Col lg={6}>
        <img className='w-50 mt-5 mx-5' src="https://c8.alamy.com/comp/2A64XDM/trolley-shopping-cart-logo-icon-design-shop-symbol-vector-illustrations-2A64XDM.jpg" alt="" />
        </Col>
        <Col lg={6}>
        <h2>Welcome To your shopping world <span className='text-secondary'>E-kart</span></h2>
        </Col>

      </Row>
    </Container>
    {product.length>0?
    <div className='p-5'>
      <Row>
        {
          product.map(i=>(
            <Col lg={3} md={4} sm={6}>
               <Card className='mt-5 p-3' style={{ width: '18rem', height:'28rem' }}>
      <Card.Img  style={{height:'200px'}} variant="top" src={i.image} />
      <Card.Body>
        <Card.Title ><h5>{i.title.length>35?i.title.slice(0,35)+"....":i.title}</h5></Card.Title>
        <Card.Text>
         {i.category}<br/>
         <h5>{i.price} $</h5><br/>
        <b> Rating :<span className={i.rating.rate>4?'text-success':i.rating.rate>3?'text-warning':'text-danger'}> {i.rating.rate} <i class="fa-solid fa-star">
          <i class="fa-solid fa-star"></i></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span></b><br/>

        </Card.Text>

      </Card.Body>
    </Card>
            </Col>
          )

          )
        }
      </Row>
    </div>
    :
    <div className='text-center m-4'>
    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
    </div>

      }
    </div>
      
  )
}

export default Productlist