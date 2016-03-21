import React, { PropTypes } from 'react'
import SelectList from 'react-widgets/lib/SelectList';

const TopicList = ({topics, selectHandler}) => (
    <div>
        <SelectList style={{width:'350px'}} onChange={selectHandler} value={topics.filter((t) => (t.selected))} valueField='id' textField={item => item.name + ' (' + item.questionCount + ')'} data={topics} multiple={true} />
    </div>
)


TopicList.propTypes = {
    selectHandler: PropTypes.func.isRequired
}

export default TopicList
