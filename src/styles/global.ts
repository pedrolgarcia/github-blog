import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['blue-300']};
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-200']};
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 1.6;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;

  color: ${({ theme }) => theme['blue-300']};
  border-bottom: 1px solid ${({ theme }) => theme['gray-600']};

  text-decoration: none;

  &:hover {
    transition: border-bottom-color 0.2s;
    border-bottom-color: ${({ theme }) => theme['blue-300']};
  }
`
