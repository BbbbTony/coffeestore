import { Container, Row, Col } from 'react-bootstrap';
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
        </Container>
    );
};

export default Detail;
