import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button
        className={`Button pv2 ph4 br1 bn white pointer ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
