import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FC, useEffect, useState } from 'react';
import { Coffee } from '../App';
import { useParams } from 'react-router-dom';

interface DetailProps {
    coffee: Coffee[];
}

const Detail: FC<DetailProps> = ({ coffee }) => {
    const { id } = useParams<{ id?: string }>();
    const parsedId: number | undefined = id ? parseInt(id, 10) : 0;
    let [discount, setDiscount] = useState<boolean>(true);
    let timer: NodeJS.Timeout;
    useEffect(() => {
        // 마운트, 업데이트 시 실행    함수형 컴포넌트한테는 이 유즈이펙트가 라이프사이클 훅이다
        const fetchData = async () => {
            timer = setTimeout(() => {
                setDiscount(false);
            }, 4000);
        };
        fetchData();

        return () => {
            clearTimeout(timer);
        };
    });

    let [tab, setTab] = useState<number>(0);

    return (
        <Container>
            {discount === true ? <div className="App-header">4초안에 누를시 1000원 할인</div> : null}

            <Row>
                <Col>
                    <img src={process.env.PUBLIC_URL + '/coffee' + (parsedId + 1) + '.jpg'} width="80%"></img>
                </Col>
                <Col>
                    <h5>{coffee[parsedId].title}</h5>
                    <h6>{coffee[parsedId].content}</h6>
                    <p>{coffee[parsedId].price}</p>
                    <button className="btn btn-primary">캐리어에 담기</button>
                </Col>
            </Row>
            <br></br>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey="link0"
                    >
                        제품 영양 정보
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey="link1"
                    >
                        리뷰
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey="link2"
                    >
                        교환
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}></TabContent>
        </Container>
    );
};

interface TabContentPorps {
    tab: number;
}

const TabContent: FC<TabContentPorps> = ({ tab }) => {
    // if (tab == 0) {
    //     return <div>제품 영양 정보입니다.</div>;
    // } else if (tab == 1) {
    //     return <div>리뷰 정보 입니다.</div>;
    // } else if (tab == 2) {
    //     return <div>교환 방법 입니다.</div>;
    // } else {
    //     return null;
    // }
    return [<div>제품 영양 정보입니다.</div>, <div>리뷰 정보 입니다.</div>, <div>교환 방법 입니다.</div>][tab];
};

export default Detail;
