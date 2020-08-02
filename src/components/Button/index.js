/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    color: var(--primary);
    border: 1px solid var(--white);
    /* background: var(--white); */
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 1px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .05s;

    &:hover,
    &:focus {
        opacity: .8;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--black);
        border-radius: 0;
        border: 0;
        text-align: center;
        font-size: 14px;
        &:hover,
        &:focus {
            opacity: .95;
        }
        /* height: 25px; */
}
`;

export default Button;
