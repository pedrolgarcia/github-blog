import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkButton } from '../../../../styles/global'

import {
  Details,
  Title,
  Info,
  InfoHeader,
  PostDetailsContainer,
} from './styles'

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <Info>
        <InfoHeader>
          <LinkButton href="/">
            <FontAwesomeIcon icon="chevron-left" />
            <span>VOLTAR</span>
          </LinkButton>

          <LinkButton href="/">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </LinkButton>
        </InfoHeader>

        <Title>JavaScript data types and data structures</Title>

        <Details>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>pedrolgarcia</span>
          </div>

          <div>
            <FontAwesomeIcon icon="calendar-day" />
            <span>Há 1 dia</span>
          </div>

          <div>
            <FontAwesomeIcon icon="comment" />
            <span>5 comentários</span>
          </div>
        </Details>
      </Info>
    </PostDetailsContainer>
  )
}
