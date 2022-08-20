import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex: 1;

  input {
    flex: 1;

    padding: 0.75rem 1rem;

    background-color: ${({ theme }) => theme['gray-900']};

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['gray-500']};

    color: ${({ theme }) => theme['gray-200']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
  }
`
