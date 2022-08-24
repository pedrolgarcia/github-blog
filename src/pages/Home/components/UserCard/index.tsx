import { useEffect, useState } from 'react'
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

import { api, ghUsername } from '../../../../lib/axios'

interface User {
  name: string
  bio: string
  followers: number
  company: string
  login: string
  html_url: string
  avatar_url: string
}

export function UserCard() {
  const [user, setUser] = useState<User | null>(null)

  async function loadGithubUserData() {
    const response = await api.get(`/users/${ghUsername}`)

    const { name, bio, followers, company, login, avatar_url, html_url } =
      response.data

    setUser({
      name,
      bio,
      followers,
      company,
      login,
      html_url,
      avatar_url,
    })
  }

  useEffect(() => {
    loadGithubUserData()
  }, [])

  return (
    <UserCardContainer>
      <Avatar>
        <img src={user?.avatar_url} alt="" />
      </Avatar>

      <Info>
        <InfoHeader>
          <strong>{user?.name}</strong>

          <LinkButton href={user?.html_url || ''} target="_blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </LinkButton>
        </InfoHeader>

        <Bio>{user?.bio}</Bio>

        <Account>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>{user?.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon="building" />
            <span>{user?.company}</span>
          </div>

          <div>
            <FontAwesomeIcon icon="user-group" />
            <span>
              {user && user?.followers > 1
                ? `${user?.followers} seguidores`
                : `${user?.followers} seguidor`}{' '}
            </span>
          </div>
        </Account>
      </Info>
    </UserCardContainer>
  )
}
