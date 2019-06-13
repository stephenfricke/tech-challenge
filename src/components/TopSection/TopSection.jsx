import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import ContentSection from '../ContentSection';
import { TOP_SECTION_CONTENT } from '../../constants';

const TopSection = () => {
  const rowColumns = TOP_SECTION_CONTENT.map(column => (
    <Col className="text-center my-3 mx-5" key={column.id}>
      <div className="section_circle" />
      <h3>{column.title}</h3>
      <p className="small">
        {column.text}
      </p>
      <Button variant="secondary" className="text-center">View Details »</Button>
    </Col>
  ));
  return (
    <ContentSection>
      <Container>
        <Row>
          {rowColumns}
        </Row>
      </Container>
    </ContentSection>
  );
};

export default TopSection;
