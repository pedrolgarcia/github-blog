import { formatDistanceToNow } from 'date-fns'
import pt_BR from 'date-fns/locale/pt-BR'

import { PostCardLink, PostDescription, PostCardHeader } from './styles'

import { Post } from '../..'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const dateFormatted = formatDistanceToNow(new Date(post.created_at), {
    locale: pt_BR,
  })

  return (
    <PostCardLink to={post.url}>
      <PostCardHeader>
        <span>{post.title}</span>
        {dateFormatted && <span>há {dateFormatted}</span>}
      </PostCardHeader>

      <PostDescription>{post.body}</PostDescription>
    </PostCardLink>
  )
}
