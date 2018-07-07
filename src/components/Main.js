import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;

  span{
    display: block
    font-size: 40px;
  }
`

const Light = styled.div`
  margin-top: 54px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`

const CallBtn = styled.button`
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  border: none;
  border-radius: 40px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 32px;
`

class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            <span>Качественный ремонт</span>
            iphone за 35 минут и гарантия 1 год
          </Repair>
          <Light>
            Оставьте заявку на бесплатную диагностику без очереди,
            и получите защитное стекло, стоимостью 1000 рублей,
            с установкой в подарок!
          </Light>
          <CallBtn>
            Оставить заявку!
          </CallBtn>
        </Col>
        <Col lg={6} offset={1}>
        </Col>
      </Row>
    );
  }
}

export default Main;
