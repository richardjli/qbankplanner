import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTopic } from '../actions/actions'
import TopicList from '../components/TopicList'

const mapDispatchToProps = (dispatch) => {
  return {
    selectHandler: (values) => {
        dispatch(toggleTopic(values))
        }
    }
  }

const mapStateToProps = (state) => {
  return {topics: state.topics}
}

const TopicsContainer = connect(mapStateToProps, mapDispatchToProps)(TopicList)

export default TopicsContainer
