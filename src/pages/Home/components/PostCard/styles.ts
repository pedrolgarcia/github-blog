import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 16.25rem;

  padding: 2rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme['gray-600']};

  color: ${({ theme }) => theme['gray-200']};
  text-decoration: none;

  background-color: ${({ theme }) => theme['gray-600']};

  cursor: pointer;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme['gray-400']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  span:first-child {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['gray-50']};
    line-height: 1.6;

    margin-right: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span:last-child {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-300']};
    line-height: 1.6;

    align-self: center;
  }
`

export const PostDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  line-height: 1.6;
`
