import styled from 'styled-components'

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: -5.5rem;
  padding: 2rem;

  width: 100%;
  height: 13.25rem;

  gap: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background-color: ${({ theme }) => theme['gray-700']};
`

export const Avatar = styled.figure`
  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Name = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-50']};
    line-height: 1.3;
  }
`

export const Bio = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-bottom: 1.5rem;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['gray-400']};
    }

    span {
      color: ${({ theme }) => theme['gray-100']};
    }
  }
`
