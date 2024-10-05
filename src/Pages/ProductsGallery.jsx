import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewCard from '../components/card';

const productlist = [
    {id:"1" , title: "Portrait1", desc: "Nature View", price: 2000,imgUrl:"images/1654-0112.jpg" },
  
    {id:"2", title: "Portrait2", desc: "sun", price: 2500 ,imgUrl:"images/1654-0112.jpg"},
  
    {id:"3",  title: "Portrait3", desc: "sun rise", price: 2000 ,imgUrl:"images/1654-0112.jpg"},
  
    {id:"4",  title: "Portrait4", desc: "Nature View4", price: 3000,imgUrl:"images/1654-0112.jpg" },
  
    {id:"5",  title: "Portrait5", desc: "Nature View5", price: 9000,imgUrl:"images/1654-0112.jpg" },
  
    {id:"6",  title: "Portrait6", desc: "Nature View6", price: 5000 ,imgUrl:"images/1654-0112.jpg" },
  
    {id:"7",  title: "Portrait7", desc: "Nature View7", price: 4000 ,imgUrl:"images/1654-0112.jpg"},

    {id:"8",  title: "Portrait8", desc: "Nature View8", price: 3000 ,imgUrl:"images/1654-0112.jpg"},
  ];

export default function ProductsGallery() {

  return (
    <Container className='pt-5'>
      <Row xs={1} md={3}  lg={4} className="g-4">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
      {  productlist.map ((item) =>
        <Col key={item.id}>
          <NewCard 
              id={item.id}
              title={item.title}
              price={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}/>
        </Col>
        )}
      {/* ))} */}
    </Row>
    </Container>
  );
}
