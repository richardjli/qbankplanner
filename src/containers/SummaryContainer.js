import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeParams } from '../actions/actions'
import SummaryText from '../components/SummaryText'

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    topics: state.topics
  }
}

const SummaryContainer = connect(
    mapStateToProps
)(SummaryText)

export default SummaryContainer
