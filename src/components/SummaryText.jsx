import React, { PropTypes } from 'react'

const maxQuestionsPerDay = (minPerDay, reviewTime, minPerQuestion) => ((minPerDay - reviewTime) / minPerQuestion)

const enoughMinutes = (minPerDay, minPerQuestion, questionsPerDay) =>
{
    return 0
}

const questionsPerDay = (totalQuestions, minPerDay, daysPerWeek, numWeeks, minPerQuestion) => {
    let totalDays = daysPerWeek * numWeeks
    let maxQuestions = maxQuestionsPerDay(minPerDay, minPerQuestion) * totalDays

    if (totalQuestions > maxQuestions) {
        return -1
    }
    else
    {
        return Math.floor(totalQuestions / totalDays)
    }
}

const selectedQuestionCount = (topics) => {
    return topics.filter((topic) => topic.selected)
    .reduce(((prev, curr) => prev + curr.questionCount), 0)
}

const duration = (questionCount, questionsPerDay, daysPerWeek) =>
{
    let totalDays = Math.ceil(questionCount / questionsPerDay)
    let remainderDays = totalDays % daysPerWeek
    let totalMonths = Math.floor(totalDays / daysPerWeek)

    return totalMonths + ' weeks and ' + remainderDays + ' days'
}

const SummaryText = ({settings, topics}) => (
    <div>
        <b>Total questions</b> you selected is <b>{selectedQuestionCount(topics)} questions.</b>
        <br />
        <b>Each day, </b> you will study <b>{maxQuestionsPerDay(settings.minPerDay, settings.reviewTime, settings.minPerQuestion)} new questions</b> and spend <b>{settings.reviewTime} minutes of review time</b> on old material.
        <br />
        <b>Completing all questions</b> will take <b>{duration(selectedQuestionCount(topics), maxQuestionsPerDay(settings.minPerDay, settings.reviewTime, settings.minPerQuestion), settings.daysPerWeek)}.</b>

    </div>
)

export default SummaryText
