import React, { FC, useState } from 'react';
import './App.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import coffees from './data/coffeelist';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import About from './pages/About';
import axios from 'axios';

export interface Coffee {
    id: number;
    title: string;
    content: string;
    price: number;
}

function App() {
    let [coffee, setCoffee] = useState<Coffee[]>(coffees);
    let navigate = useNavigate(); //ㅋㅋ 함수포인터

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <h2>Coffee Bangne</h2>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/about');
                            }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link href="#pricing">Best Coffee</Nav.Link>
                        <Nav.Link href="#pricing">Cart</Nav.Link>
                        <Nav.Link href="#pricing">contect</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <Routes>
                <Route path="/detail/:id" element={<Detail coffee={coffee}></Detail>}></Route>
                <Route path="/about" element={<About></About>}>
                    <Route
                        path="member"
                        element={
                            <div>
                                <img src={process.env.PUBLIC_URL + '/member.jpg'} width="30%"></img>
                                <br></br>대표임
                            </div>
                        }
                    ></Route>
                    <Route
                        path="location"
                        element={
                            <div>
                                <img src={process.env.PUBLIC_URL + '/location.jpg'} width="50%"></img>
                                <br></br>서울임
                            </div>
                        }
                    ></Route>
                </Route>

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
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    axios
                                        .get('https://jamsuham75.github.io/image/coffee.json')
                                        .then((result) => {
                                            let coffee2 = [...coffee, ...result.data];
                                            setCoffee(coffee2);
                                        })
                                        .catch(() => {
                                            console.log('fail');
                                        });
                                }}
                            >
                                🔻
                            </button>
                        </div>
                    }
                ></Route>
                <Route path="*" element={'존재하지 않는 요청입니다. 다시 확인해주세요'}></Route>
            </Routes>
        </div>
    );
}

interface CoffeeItemProps {
    coffee: Coffee;
}

const CoffeeItem: FC<CoffeeItemProps> = ({ coffee }) => {
    let navigate = useNavigate();
    return (
        <Col
            onClick={() => {
                navigate('/detail/' + coffee.id);
            }}
        >
            <img src={process.env.PUBLIC_URL + './coffee' + (coffee.id + 1) + '.jpg'} width="70%"></img>
            <h5>{coffee.title}</h5>
            <p>{coffee.price}</p>
        </Col>
    );
};

export default App;
