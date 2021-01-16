import React from 'react'
import PropTypes from 'prop-types'
import ClipLoader from "react-spinners/ClipLoader"

const Loading = props => {
  const { loading, children } = props
  if (!loading) {
    return children
  }
  return (
    <div className="columns is-mobile is-centered">
      <ClipLoader color={"#36D7B7"} loading={loading} size={100} />
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
