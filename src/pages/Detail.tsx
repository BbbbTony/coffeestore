import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import React, { FC, useState } from 'react';

const Detail: FC = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={process.env.PUBLIC_URL + 'coffee' + 1 + '.jpg'} width="80%"></img>
                </Col>
                <Col>
                    <h5>커피 이름</h5>
                    <h6>커피 상세 설명</h6>
                    <p>커피 가격</p>
                    <button className="btn btn-primary">캐리어에 담기</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Detail;
