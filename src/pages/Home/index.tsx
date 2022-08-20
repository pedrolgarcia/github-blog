import { HomeContainer, Content, PostsList, PostListHeader } from './styles'

import { UserCard } from './components/UserCard'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

export function Home() {
  return (
    <HomeContainer>
      <UserCard />

      <Content>
        <PostListHeader>
          <div>
            <span>Publicações</span>
            <span>6 publicações</span>
          </div>

          <SearchForm />
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
