import { combineReducers } from 'redux'
import update from 'react/lib/update';

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

const fullTopicList = [
    { id: 0, name: 'Behavioral Science', questionCount: 145, selected: false, order: 1 },
    { id: 1, name: 'Biochemistry', questionCount: 166, selected: false, order: 2 },
    { id: 2, name: 'Biostatistics', questionCount: 66, selected: false, order: 3 },
    { id: 3, name: 'Genetics', questionCount: 81, selected: false, order: 4 },
    { id: 4, name: 'Immunology', questionCount: 94, selected: false, order: 5 },
    { id: 5, name: 'Microbiology', questionCount: 216, selected: false, order: 6 },
    { id: 6, name: 'Cardiology', questionCount: 287, selected: false, order: 7 },
    { id: 7, name: 'Dermatology', questionCount: 39, selected: false, order: 8 },
    { id: 9, name: 'ENT', questionCount: 10, selected: false, order: 9 },
    { id: 10, name: 'Endocrinology', questionCount: 132, selected: false, order: 10 },
    { id: 11, name: 'Gastroenterology', questionCount: 187, selected: false, order: 11 },
    { id: 12, name: 'Hematology/Oncology', questionCount: 159, selected: false, order: 12 },
    { id: 13, name: 'Neurology', questionCount: 231, selected: false, order: 13 },
    { id: 14, name: 'Pulmonology', questionCount: 124, selected: false, order: 14 },
    { id: 15, name: 'Nephrology', questionCount: 131, selected: false },
    { id: 16, name: 'Musculoskeletal/Rheumatology', questionCount: 114, selected: false },
    { id: 17, name: 'Reproduction', questionCount: 63, selected: false },
    { id: 18, name: 'Ophthalmology', questionCount: 7, selected: false },
    { id: 19, name: 'Psychiatry', questionCount: 21, selected: false },
    { id: 20, name: 'Poisoning', questionCount: 5, selected: false },
    { id: 21, name: 'Allergy/Immunology', questionCount: 9, selected: false },
    { id: 23, name: 'Infectious Diseases', questionCount: 51, selected: false },
    { id: 24, name: 'General Principles', questionCount: 18, selected: false }
]

const orderedTopics = (state = fullTopicList.filter((t) => (t.selected)), action) => {
    switch (action.type) {
        case 'TOGGLE_TOPIC':
            return update(state, {$set: action.selectedTopics})
        case 'DRAG_CARD':
            return update(state, {
                $splice: [
                  [action.dragIndex, 1],
                  [action.hoverIndex, 0, state[action.dragIndex]]
                ]
              }
            )
        default:
            return state
    }
}

const extractTopicIds = (values) => {
    let selectedTopics = []
    values.forEach(value => {selectedTopics.push(value.id)})
    return selectedTopics
    }

const topic = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_TOPIC':
          if (extractTopicIds(action.selectedTopics).includes(state.id)) {
              return Object.assign({}, state, {selected: true})
          }

          return Object.assign({}, state, {selected: false})
        default:
          return state
      }
    }

const topics = (state = fullTopicList, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC':
      return state.map(t =>
        topic(t, action)
      )
    default:
      return state
  }
}

const defaultParams =
{
    minPerDay: 60,
    daysPerWeek: 7,
    reviewTime: 20,
    minPerQuestion: 2,
    numWeeks: 4
}

const settings = (state = defaultParams, action) => {
    switch (action.type) {
        case 'CHANGE_PARAM':
            return Object.assign({}, state, { [action.param]: action.value})
        default:
            return state
    }
}

const rootReducer = combineReducers({orderedTopics, topics, settings})

export default rootReducer
