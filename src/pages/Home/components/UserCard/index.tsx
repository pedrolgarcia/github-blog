import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkButton } from '../../../../styles/global'

import {
  Account,
  Avatar,
  Bio,
  Info,
  InfoHeader,
  UserCardContainer,
} from './styles'

export function UserCard() {
  return (
    <UserCardContainer>
      <Avatar>
        <img src="https://github.com/pedrolgarcia.png" alt="" />
      </Avatar>

      <Info>
        <InfoHeader>
          <strong>Pedro Lopes</strong>

          <LinkButton href="/">
            <span>GITHUB</span>
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </LinkButton>
        </InfoHeader>

        <Bio>
          osapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl kasmdlkmasdkl
          osapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl kasmdlkmasdkl
          osapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl kasmdlkmasdkl
          osapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdklosapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdkl osapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdklosapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdklosapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdklosapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdklosapdkopskdopaskdopa sdasklasmdkl amskdmklasm dkl asdl
          kasmdlkmasdkl
        </Bio>

        <Account>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>pedrolgarcia</span>
          </div>

          <div>
            <FontAwesomeIcon icon="building" />
            <span>SixCreative</span>
          </div>

          <div>
            <FontAwesomeIcon icon="user-group" />
            <span>25 seguidores</span>
          </div>
        </Account>
      </Info>
    </UserCardContainer>
  )
}
