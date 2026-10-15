import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';

export default function App() {
  return (
    <>
      <Header />
      <Container as="main" className="py-4 py-md-5">
        <h1 className="h2 fw-bold mb-1">Каталог цифровых товаров</h1>
        <p className="text-secondary mb-4">Иконки, шрифты, UI-киты и мокапы</p>
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
