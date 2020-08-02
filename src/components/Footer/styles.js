/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: #141414;
  /* border-top: .5px solid var(--primary); */
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 10px;
  min-height: 10px;
  height: 60px;
  font-size: 15px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 25px;
  }
  
`;
