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