import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const HistoryListener = ({ children, onChange }) => {
  const [isFirstRender, setFirstRender] = useState(true)
  const history = useHistory()

  useEffect(() => {
    onChange()
    setFirstRender(false)

    return history.listen(location => onChange())
  }, [history])

  return children
}

export default HistoryListener
