import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

const mapStateToProps = (state) => {
  return {
    topics: state.orderedTopics,
    settings: state.settings
  }
}

const CalendarContainer = connect(
    mapStateToProps
)(Calendar)

export default CalendarContainer
