{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
}

{
  type: 'REMOVE_TODO',
    id: 0
}

{
  type: 'TOGGLE_TODO',
    id: 0
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a marathon'
  }
}

{
  type: 'REMOVE_GOAL',
    id: 0
}

function createStore () {
  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listener.push(listener)
    return () => {
      listener = listeners.filter((l)=> l !== listener)
    }
  }

  return {
    getState,
    subscribe
  }

}