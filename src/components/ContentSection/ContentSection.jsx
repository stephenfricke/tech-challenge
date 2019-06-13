import React from 'react';
import { node } from 'prop-types';
import '../../styles/ContentSection.css';

const ContentSection = (props) => {
  const { children } = props;
  return (
    <div className="content_section">
      {children}
    </div>
  );
};

ContentSection.propTypes = {
  children: node,
};
ContentSection.defaultProps = {
  children: null,
};

export default ContentSection;
