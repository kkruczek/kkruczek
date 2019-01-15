import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  background: #FFFFFF;
  padding: 50px 0;
`;

const FooterText = styled.span`
  opacity: 0.4;
  color: #333C48;
  font-family: Roboto-Regular, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const Footer = () => (
  <Wrapper>
    <FooterText>
      {`${new Date().getFullYear()} Copyright`}
    </FooterText>
  </Wrapper>
);

export default Footer;
