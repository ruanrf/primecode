import styled from "styled-components";

const Button = styled.button`
    color: var(--primary);
    border: 1px solid var(--white);
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
    transition: opacity .2s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button


