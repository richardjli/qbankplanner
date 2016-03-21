/*
 * action types
 */

export const TOGGLE_TOPIC = 'TOGGLE_TOPIC'
export const CHANGE_ASSUM = 'CHANGE_ASSUM'
export const CHANGE_PARAM = 'CHANGE_PARAM'
export const DRAG_CARD = 'DRAG_CARD'


/*
 * action creators
 */

export function toggleTopic(selectedTopics) {
  return { type: TOGGLE_TOPIC, selectedTopics }
}

export function changeAssums(setting, value) {
  return { type: CHANGE_ASSUM, setting, value }
}

export function changeParams(param, value) {
  return { type: CHANGE_PARAM, param, value }
}

export function dragCard(dragIndex, hoverIndex) {
    return { type: DRAG_CARD, dragIndex, hoverIndex }
}
