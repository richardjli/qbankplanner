import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SortableList from '../components/SortableList'
import { dragCard } from '../actions/actions'


const mapStateToProps = (state) => {
  return {
    cards: state.orderedTopics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (dragIndex, hoverIndex) => {
        dispatch(dragCard(dragIndex, hoverIndex))
        }
    }
  }

const SortableContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SortableList)

export default SortableContainer
