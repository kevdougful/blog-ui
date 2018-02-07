import { connect } from 'react-redux'
import { togglePost } from '../actions'
import PostList from '../components/PostList'

const getPosts = (posts) => {
    return posts
}

const mapStateToProps = state => {
    return {
        posts: getPosts(state.posts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostClick: id => {
            dispatch(togglePost(id))
        }
    }
}

const VisiblePostList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)

export default VisiblePostList
