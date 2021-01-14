import React from 'react'
import PropTypes from 'prop-types'

const Loading = props => {
  const { loading, children } = props
  if (!loading) {
    return children
  }
  return (
    <div>
      <div>Loading</div>
    </div>
  )
}

Loading.defaultProps = {
  loading: true,
  children: [],
}

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
}

export default Loading
