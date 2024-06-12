import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.family.primary};
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
    }

    html, body {
        width: 100%;
        min-height: 100vh;
        
    }

    button {
        cursor: pointer;
        transition: 0.2s ease-out;
        background-color: none;
        border: none;
    }

    input {
        border: none;
        outline: none;
    }
`;
