import React from 'react';
import PropTypes from 'prop-types';

const Glitch = (props, context) => {
  const { alt, path, project, title } = props;
  const embedRoot = 'https://glitch.com/edit/#!/embed';
  const embedURL = `${embedRoot}/${project}?path=${path}`;
  const glitchWrapStyle = {
    height: '600px',
    width: '100%',
    border: '1px solid #C3C3C3',
    borderRadius: '5px',
    boxShadow: '4px 4px #C3C3C3',
    backgroundColor: 'white',
    overflow: 'hidden'
  };

  const glitchIframeStyle = {
    height: '100%',
    width: '100%',
    border: 0
  };

  return (
    <div style={glitchWrapStyle}>
      <iframe
        src={embedURL}
        alt={alt}
        title={title}
        style={glitchIframeStyle}
      />
    </div>
  );
};

Glitch.propTypes = {
  alt: PropTypes.string,
  path: PropTypes.string,
  project: PropTypes.string.isRequired,
  title: PropTypes.string
};

Glitch.defaultProps = {
  alt: 'Example code in Glitch',
  path: '',
  title: 'Example code in Glitch'
};

export default Glitch;
