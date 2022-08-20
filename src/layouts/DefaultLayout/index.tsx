import { Outlet } from 'react-router-dom'

import { Content, MainContainer } from './styles'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <MainContainer>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  )
}
