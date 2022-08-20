import { Outlet } from 'react-router-dom'

import { Content } from './styles'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </div>
  )
}
