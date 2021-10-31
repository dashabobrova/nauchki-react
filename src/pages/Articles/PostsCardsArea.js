import React from 'react'
import { PostItem } from './PostItem'

export const PostsCardsArea = ({posts}) => {
    return (
        <div className="acticles__cards-wrapper">
              {posts.map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
            </div>
    )
}
