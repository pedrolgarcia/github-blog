import styled from 'styled-components'

import HeaderBackground from '../../assets/header-background.svg'

export const HeaderContainer = styled.header`
  background-image: url(${HeaderBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;

  img {
    padding: 4rem 2rem 8.375rem;
  }
`
