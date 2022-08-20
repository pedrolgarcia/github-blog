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

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 2rem;
`
