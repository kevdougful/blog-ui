import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts, onPostClick }) => (
    <ul>
        {
            posts.map(post => (
                <Post key={post.id} {...post} onClick={() => onPostClick(post.id)} />
            ))
        }
    </ul>
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }).isRequired
    ).isRequired,
    onPostClick: PropTypes.func.isRequired
}

export default PostList
