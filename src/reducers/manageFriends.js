export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })
      break
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, index),
          ...state.friends.slice(index + 1)
        ]
      })
      break
    default:
      return state
  }
}
