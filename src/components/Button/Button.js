import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BUTTON_TYPES = [
  'button',
  'submit',
  'reset',
  'link'
];

const styles = css`
  background: #235EFF;
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
  background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
  background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
  background-image: -o-linear-gradient(left, #4997FF, #235EFF);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.2);
  
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: #FFFFFF;
  font-family: Roboto-Medium, sans-serif;
  font-size: 14px;
  padding: 10px 20px;
  margin-left: 35px;
  border: none;
  border-radius: 3px;
  transition: opacity 0.2s ease;
  
  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
`;

const StyledButton = styled.button`${styles}`;

const Button = ({
  children,
  className,
  disabled,
  type,
  onClick,
  ...restProps
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    type={type}
    onClick={onClick}
    {...restProps}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  /** Content for the button */
  children: PropTypes.node,
  /** Add className to button */
  className: PropTypes.string,
  /** Disable button */
  disabled: PropTypes.bool,
  /** Button types */
  type: PropTypes.oneOf(BUTTON_TYPES),
  /** Function to run when the button is clicked */
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  className: '',
  disabled: false,
  type: 'button',
  onClick() {}
};

Button.displayName = 'Button';

export default Button;
