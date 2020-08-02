/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: .5px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0;
  padding-bottom: 5px;
  min-height: 10px;
  height: 45px;
  font-size: 15px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 25px;
  }
  
`;
