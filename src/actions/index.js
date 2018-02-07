let nextPostId = 0
export const addPost = (title, text) => {
  return {
    type: 'ADD_POST',
    id: nextPostId++,
    title,
    text
  }
}

export const togglePost = id => {
  return {
    type: 'TOGGLE_POST',
    id
  }
}
