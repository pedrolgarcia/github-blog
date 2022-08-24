import { formatDistanceToNow } from 'date-fns'
import pt_BR from 'date-fns/locale/pt-BR'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkButton, RouterButton } from '../../../../styles/global'
import {
  Details,
  Title,
  Info,
  InfoHeader,
  PostDetailsContainer,
} from './styles'

import { Post } from '../../../Home'
import { Link } from 'react-router-dom'

interface PostDetailsProps {
  post: Post
}

export function PostDetails({ post }: PostDetailsProps) {
  const formattedCreatedAt = formatDistanceToNow(new Date(post.created_at), {
    locale: pt_BR,
  })

  return (
    <PostDetailsContainer>
      <Info>
        <InfoHeader>
          <RouterButton to="/">
            <FontAwesomeIcon icon="chevron-left" />
            <span>VOLTAR</span>
          </RouterButton>

          <LinkButton href={post.html_url} target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </LinkButton>
        </InfoHeader>

        <Title>{post.title}</Title>

        <Details>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>{post.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon="calendar-day" />
            <span>Há {formattedCreatedAt}</span>
          </div>

          <div>
            <FontAwesomeIcon icon="comment" />
            <span>
              {post.comments === 1
                ? `1 comentário`
                : `${post.comments} comentários`}
            </span>
          </div>
        </Details>
      </Info>
    </PostDetailsContainer>
  )
}
