import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeParams } from '../actions/actions'
import Settings from '../components/Settings'

const mapStateToProps = (state) => {
    return {
        minPerDay: state.settings.minPerDay,
        daysPerWeek: state.settings.daysPerWeek,
        reviewTime: state.settings.reviewTime,
        minPerQuestion: state.settings.minPerQuestion,
        numWeeks: state.settings.numWeeks
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (name, value) => {
        dispatch(changeParams(name, value))
        }
    }
  }

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default SettingsContainer
