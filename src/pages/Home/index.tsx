import { ChangeEvent, useEffect, useState } from 'react'

import {
  HomeContainer,
  Content,
  PostsList,
  PostListHeader,
  SearchInput,
} from './styles'

import { UserCard } from './components/UserCard'
import { PostCard } from './components/PostCard'
import { api, ghRepo, ghUsername } from '../../lib/axios'

interface Post {}

export function Home() {
  const [posts, setPosts] = useState<Post[]>()
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function searchPosts() {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query}%20repo:${ghUsername}/${ghRepo}`,
        },
      })

      const data = response.data

      setPosts(data)
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
            <span>6 publicações</span>
          </div>

          <SearchInput
            type="text"
            placeholder="Buscar conteúdo"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </PostListHeader>

        <PostsList>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsList>
      </Content>
    </HomeContainer>
  )
}
