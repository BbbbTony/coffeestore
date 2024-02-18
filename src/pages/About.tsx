import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import React, { FC, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

const About: FC = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1>회사정보</h1>
            <img src={'../lab.jpg'} width="70%"></img>
            <Outlet></Outlet>
            <p></p>
            <button
                className="btn btn-primary"
                style={{ marginRight: '10px' }}
                onClick={() => {
                    navigate('/about/member');
                }}
            >
                멤버
            </button>
            <button
                className="btn btn-warning"
                onClick={() => {
                    navigate('/about/location');
                }}
            >
                위치
            </button>
        </div>
    );
};

export default About;
