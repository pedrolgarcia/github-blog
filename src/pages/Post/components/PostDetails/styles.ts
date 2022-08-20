import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: -5.5rem;
  padding: 2rem;

  width: 100%;

  gap: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background-color: ${({ theme }) => theme['gray-700']};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const InfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.25rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme['gray-50']};
  line-height: 1.3;

  margin-bottom: 0.5rem;
`

export const Details = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['gray-400']};
    }

    span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }
`
