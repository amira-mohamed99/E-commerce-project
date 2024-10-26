import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Form className="border p-4 rounded logform">
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
        <div className="or">
          <p>
            OR
          </p>
        </div>
        <hr></hr>
        <Button variant="primary" class="btn btn-outline-primary" as={Link} to='/Singnup'>Sign Up</Button>
      </Form>
    </Container>
  );
}

export default Login;
