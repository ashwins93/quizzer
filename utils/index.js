import React from 'react'

export const useLocalStorage = (initialValue, key) => {
  const [state, setState] = React.useState(initialValue)

  React.useEffect(() => {
    const val = window.localStorage.getItem(key)
    if (!val) return
    setState(JSON.parse(val))
  }, [key])

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
