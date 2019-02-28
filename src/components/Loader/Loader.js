import React from 'react';
import styled from 'styled-components';

// TODO: modify current styles to adapt to other places
const Wrapper = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;
  bottom: -16px;
  left: 64px;
 
  align-items: center;
  background-color: rgba(241, 250, 255, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    right: 0;
    left: 24px;
  }
  
  @media (max-width: 768px) {
    left: 0;
  }
`;

const Spinner = styled.div`
  -webkit-animation: scale-out 1.0s infinite ease-in-out;
  animation: scale-out 1.0s infinite ease-in-out;
  background: #235EFF;
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
  background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
  background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
  background-image: -o-linear-gradient(left, #4997FF, #235EFF);
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

const Loader = () => (
  <Wrapper>
    <Spinner/>
  </Wrapper>
);

export default Loader;
