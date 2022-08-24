import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { PostContainer, PostContent } from './styles'

import { PostDetails } from './components/PostDetails'

import { api, ghRepo, ghUsername } from '../../lib/axios'

import { Post as PostType } from '../Home'

type PostParams = {
  postNumber: string
}

export function Post() {
  const [post, setPost] = useState<PostType | null>(null)
  const { postNumber } = useParams<PostParams>()

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(
        `repos/${ghUsername}/${ghRepo}/issues/${postNumber}`,
      )

      const {
        id,
        number,
        title,
        html_url,
        body,
        created_at,
        comments,
        user: { login },
      } = response.data

      setPost({
        id,
        number,
        title,
        html_url,
        body,
        created_at,
        comments,
        login,
      })
    }

    loadPost()
  }, [postNumber])

  if (!post) return <></>

  return (
    <PostContainer>
      <PostDetails post={post} />

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
