import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: -5.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;
`

export const PostListHeader = styled.header`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    span:first-child {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${({ theme }) => theme['gray-100']};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['gray-300']};
    }
  }
`

export const SearchInput = styled.input`
  flex: 1;

  padding: 0.75rem 1rem;

  background-color: ${({ theme }) => theme['gray-900']};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['gray-500']};

  color: ${({ theme }) => theme['gray-200']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 2rem;
`
