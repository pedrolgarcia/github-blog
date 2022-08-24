import { ChangeEvent, useEffect, useState } from 'react'

import {
  HomeContainer,
  Content,
  PostsList,
  PostListHeader,
  SearchInput,
  Empty,
} from './styles'

import { UserCard } from './components/UserCard'
import { PostCard } from './components/PostCard'
import { api, ghRepo, ghUsername } from '../../lib/axios'

export interface Post {
  id: number
  number: number
  title: string
  html_url: string
  body: string
  login: string
  created_at: Date
  comments: number
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function searchPosts() {
      const q = `${query ? `${query}` : ''} repo:${ghUsername}/${ghRepo}`

      const response = await api.get('/search/issues', {
        params: { q },
      })

      const posts: Post[] = response.data.items.map((item: any) => {
        const {
          id,
          number,
          title,
          html_url,
          body,
          created_at,
          comments,
          user: { login },
        } = item

        return {
          id,
          number,
          title,
          html_url,
          body,
          created_at,
          comments,
          login,
        }
      })

      setPosts(posts)
    }

    const timer = setTimeout(() => {
      searchPosts()
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <HomeContainer>
      <UserCard />

      <Content>
        <PostListHeader>
          <div>
            <span>Publicações</span>
            <span>
              {posts.length === 1
                ? `1 publicação`
                : `${posts.length} publicações`}
            </span>
          </div>

          <SearchInput
            type="text"
            placeholder="Buscar conteúdo"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </PostListHeader>

        {posts.length ? (
          <PostsList>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsList>
        ) : (
          <Empty>
            <p>Nenhuma publicação encontrada</p>
          </Empty>
        )}
      </Content>
    </HomeContainer>
  )
}
