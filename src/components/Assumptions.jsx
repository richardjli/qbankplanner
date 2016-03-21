import React, { PropTypes } from 'react'
import NumberPicker from 'react-widgets/lib/NumberPicker';

var numberLocalizer = require('react-widgets/lib/localizers/simple-number');

numberLocalizer();

const Assumptions = ({}) => (

    <div>
        User will spend <NumberPicker style={{width:'75px', display:'inline-block'}} defaultValue={60} min={2} max={600} /> seconds per new question, and review for <NumberPicker style={{width:'75px', display:'inline-block'}} defaultValue={20} min={2} max={120} /> minutes per day.
    </div>
)


Assumptions.propTypes = {
}

export default Assumptions
