import React, { PropTypes } from 'react'

const Steps = ({steps}) => (

    steps.forEach()
)

const Step = ({number, text}) => (
    <div>
    <a name={number}></a>
    <h3 style={{'color': 'steelblue'}}>{number}. {text}</h3>
    </div>
)

Step.propTypes = {
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default Step
