import React, { FC, useState } from 'react';
import './App.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import coffees from './coffeelist';
import { Routes, Route, Link } from 'react-router-dom';

interface Coffee {
    id: number;
    title: string;
    content: string;
    price: number;
}

function App() {
    let [coffee, setCoffee] = useState<Coffee[]>(coffees);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div>
                <Link to="/" style={{ display: 'inline-block', marginRight: '10px' }}>
                    home
                </Link>
                <Link to="/detail">detail</Link>
            </div>

            <Routes>
                <Route path="/detail" element={<div>커피 상세정보</div>}></Route>
                <Route
                    path="/"
                    element={
                        <div>
                            <div className="Home-img"></div>
                            <Container>
                                <Row>
                                    {coffee.map((item, i) => {
                                        return <CoffeeItem coffee={coffee[i]}></CoffeeItem>;
                                    })}
                                </Row>
                            </Container>
                        </div>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

interface CoffeeItemProps {
    coffee: Coffee;
}

const CoffeeItem: FC<CoffeeItemProps> = ({ coffee }) => {
    return (
        <Col>
            <img src={process.env.PUBLIC_URL + './coffee' + (coffee.id + 1) + '.jpg'} width="70%"></img>
            <h5>{coffee.title}</h5>
            <p>{coffee.price}</p>
        </Col>
    );
};

export default App;
