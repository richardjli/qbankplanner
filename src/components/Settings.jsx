import React, { PropTypes } from 'react'
import NumberPicker from 'react-widgets/lib/NumberPicker';

var numberLocalizer = require('react-widgets/lib/localizers/simple-number');

numberLocalizer();


const Settings = ({changeHandler, minPerDay, daysPerWeek, reviewTime, minPerQuestion, numWeeks}) => (
    <div>
        <div>
            <b> In total</b>, I want to study for <NumberPicker style={{width:'75px', display:'inline-block'}} onChange={changeHandler.bind(null, 'minPerDay')} name='minPerDay' value={minPerDay} min={1} max={240} /> minutes a day and <NumberPicker onChange={changeHandler.bind(null, 'daysPerWeek')} value={daysPerWeek} style={{width:'75px', display:'inline-block'}} name='daysPerWeek' min={7} max={7} /> days a week.
        </div>
        <div>
            <b>For each new question, </b>I will spend <NumberPicker onChange={changeHandler.bind(null, 'minPerQuestion')} step={0.5} precision={2} style={{width:'90px', display:'inline-block'}} value={minPerQuestion} min={0.5} max={30} /> minutes per question to answer and review the explanations.
        </div>
        <div>
            <b>To review old concepts, </b> I will
            set aside <NumberPicker onChange={changeHandler.bind(null, 'reviewTime')} style={{width:'75px', display:'inline-block'}} value={reviewTime} min={2} max={minPerDay - 1} /> minutes per day for review time.
        </div>
        <div>
            <b>My total study period</b> is <NumberPicker onChange={changeHandler.bind(null, 'numWeeks')} style={{width:'75px', display:'inline-block'}} value={numWeeks} min={1} max={52} /> weeks.
        </div>
    </div>
)


Settings.propTypes = {
    changeHandler: PropTypes.func.isRequired
}

export default Settings
