const posts = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                    expanded: false
                }
            ]
        case 'TOGGLE_POST':
            return state.map(post => 
                (post.id === action.id) ?
                    {...post, expanded: !post.expanded} :
                    post
            )
        default:
            return state
    }
}

export default posts
