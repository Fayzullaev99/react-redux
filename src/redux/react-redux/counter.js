import React from 'react'

const initialState = {
    count:0
}

function counter(state = initialState, action) {
  if (action.type === '') {
    return {
        ...state
    }
  }
  return state
}

export default counter