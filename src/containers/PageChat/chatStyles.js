import { css } from 'styled-components';

const chatStyles = css`
  .rsc-container {
    width: 430px;
    height: auto;
    margin: 30px auto 30px auto;
    box-shadow: none;
    border-radius: 0;
    background: #F1FAFF;
    transition: margin 0.3s ease, padding 0.3s ease;
  
    @media(max-width: 568px) {
      width: 100%;
      margin: 0 auto;
    }
  }
  
  .rsc-content {
    overflow-y: hidden;
    height: auto;
    
    @media(max-width: 568px) {
      padding: 32px 4px;
    }
  }
  
  .rsc-ts {
    margin-bottom: 10px;
  }
  
  .rsc-cs {
    background: transparent;
    box-shadow: none;
    text-align: right;
    display: block;
    padding: 10px 5px;
    margin: 0;
    
    .rsc-loading {
      background: #FFFFFF;
      box-shadow: 0 3px 8px 0 rgba(35,94,255,0.1);
      color: #0B1C4C;
      padding: 9px 25px;
      text-align: right;
      display: inline-block;
      border-radius: 18px 18px 0 18px;
    }
  }
  
  .rsc-ts-image-container {
    padding: 5px 10px;
    margin: 0 15px;
    
    @media(max-width: 568px) {
      margin: 0 12px;
      padding: 5px 0;
    }
  }
  
  .rsc-ts-image {
    background: #FFFFFF;
    box-shadow: 0 3px 8px 0 rgba(35, 94, 255, 0.1);
    border-radius: 50%;
    padding: 0;
    margin-right: -5px;
    width: 52px;
    height: 52px;
    
    @media(max-width: 568px) {
      width: 40px;
      height: 40px;
      margin-right: 0;
      padding: 3px;
      background: transparent;
      box-shadow: none;
    }
  }
  
  .rsc-ts-bubble {
    background: #FFFFFF;
    box-shadow: 0 3px 8px 0 rgba(35, 94, 255, 0.1);
    color: #0B1C4C;
    padding: 9px 25px;
    font-size: 14px;
    font-family: Roboto-Regular, sans-serif;
    text-align: right;
  }
  
  .rsc-loading {
    font-family: monospace;
    font-size: 18px;
  }
  
  .rsc-os-option {
    display: block;
    margin-bottom: 10px;
  }
  
  .rsc-os-option-element {
    background: linear-gradient(225deg, #9ED670 0%, #65AD3D 100%);
    box-shadow: 0 3px 8px 0 rgba(39, 83, 14, 0.2);
    padding: 16px 25px;
    font-family: Roboto-Regular, sans-serif;
    font-size: 14px;
    border: none;
    border-radius: 22px;
    color: #FFFFFF;
    cursor: pointer;
    outline: none;
    
    &:hover {
      opacity: 0.7;
    }
    
    &.static {
      cursor: default;
      
      &:hover {
        opacity: 1;
      }
    }
    
    &.link {
      background: none;
      box-shadow: none;
      color: #235EFF;
      font-family: Roboto-Medium, sans-serif;
      
      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
    
    &.exit {
      margin-top: 15px;
      
      &:after {
        content: '\\f35a';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        font-size: 14px;
        text-align: center;
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
  
  .rsc-os-options {
    margin: 2px 0 12px;
    text-align: right;
    padding: 0 6px;
    
    @media(max-width: 568px) {
      padding: 0 12px;
    }
  }
  
  a {
    color: #235EFF;
    text-decoration: none;
    font-family: Roboto-Medium, sans-serif;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default chatStyles;
