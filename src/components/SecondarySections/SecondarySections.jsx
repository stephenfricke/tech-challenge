import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import ContentSection from '../ContentSection';
import { SECONDARY_SECTIONS_CONTENT } from '../../constants';
import '../../styles/SecondarySections.css';

const SecondarySection = () => {
  const sections = SECONDARY_SECTIONS_CONTENT.map((section) => {
    const reverseClass = section.reverse ? 'flex-row-reverse' : '';
    return (
      <ContentSection key={section.id}>
        <Container>
          <Row className={reverseClass}>
            <Col className="align-self-center mb-2">
              <h2 className="secondary_section_header">
                <span className="text-dark">{section.title_dark}</span>
                <span className="text-muted">{section.title_light}</span>
              </h2>
              <section>
                {section.text}
              </section>
            </Col>
            <Col md="auto">
              <div className="box_placeholder" />
            </Col>
          </Row>
        </Container>
      </ContentSection>
    );
  });
  return sections;
};

export default SecondarySection;
