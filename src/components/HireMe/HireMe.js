import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #4997FF 0%, #235EFF 100%);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.1);
  padding: 62px 0;
`;

const Heading = styled.h2`
  color: #FFFFFF;
  font-size: 36px;
  font-family: Roboto-Regular, sans-serif;
  font-weight: 500;
  text-align: center;
  margin: 10px 0 20px 0;
`;

const Paragraph = styled.p`
  color: #FFFFFF;
  font-family: Roboto-Light, sans-serif;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.6;
  text-align: center;
  margin: 0;
`;

const HireMe = () => (
  <Wrapper>
    <Heading>
      {'I’m currently available for new projects'}
    </Heading>
    <Paragraph>
      {'If you need a quote or consultation, just let me know!'}
    </Paragraph>
  </Wrapper>
);

export default HireMe;
