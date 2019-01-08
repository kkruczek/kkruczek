import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styles = css`
  display: inline-block;
  vertical-align: middle;
  
  text-align: left;
  font-family: Roboto-Regular, sans-serif;
  font-size: 14px;
  line-height: 21px;
`;

const StyledSpan = styled.span`${styles}`;

const PageChatMessage = ({
  children,
  ...restProps
}) => (
  <StyledSpan
    {...restProps}
  >
    {children}
  </StyledSpan>
);

PageChatMessage.propTypes = {
  /** Content for the message */
  children: PropTypes.node
};

export default PageChatMessage;
