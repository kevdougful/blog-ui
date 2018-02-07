import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ onClick, title, expanded, text }) => (
    <div>
        <h2 onClick={onClick}>
            {title}
        </h2>
        <p style={{display: expanded ? 'block' : 'none'}}>
            {text}
        </p>
    </div>
)

Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Post
