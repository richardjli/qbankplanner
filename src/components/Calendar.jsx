import React from 'react';
import ReactDOM from 'react-dom';
import EventCalendar from 'react-event-calendar';
import 'react-event-calendar/dist/react-event-calendar.css'
import 'react-event-calendar/less/react-event-calendar.less'
import moment from 'moment';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Popover from 'react-bootstrap/lib/Popover';
import Overlay from 'react-bootstrap/lib/Overlay';

const maxQuestionsPerDay = (minPerDay, reviewTime, minPerQuestion) => ((minPerDay - reviewTime) / minPerQuestion)

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December', ];

const createSchedule = (questionsPerDay, topics) =>
{
  let schedule = []
  let events = []
  schedule.push([])
  let dayCounter = 1
  let dailyQuestionsLeft = questionsPerDay
  topics.forEach((topic) => {
      let startDate = dayCounter
      let questionsLeftInTopic = topic.questionCount

      while (questionsLeftInTopic >= dailyQuestionsLeft)
      {
          schedule[dayCounter - 1].push(topic.name)
          questionsLeftInTopic -= dailyQuestionsLeft
          dailyQuestionsLeft = questionsPerDay
          dayCounter++
          schedule.push([])
      }

      schedule[dayCounter - 1].push(topic.name)
      dailyQuestionsLeft -= questionsLeftInTopic
      questionsLeftInTopic = 0
      let endDate = dayCounter

      events.push({'title':topic.name, 'start':moment().add(startDate, 'day').format('YYYY-MM-DD'), 'end':moment().add(endDate, 'day').format('YYYY-MM-DD'), 'description':(topic.questionCount + ' questions over ' + (endDate - startDate + 1) + ' days')})

  })
  return events
}

class Calendar extends React.Component {

    constructor() {
        super();

        this.getState = this.getState.bind(this);
        this.getHumanDate = this.getHumanDate.bind(this);
        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleToday = this.handleToday.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
        this.handleEventMouseOut = this.handleEventMouseOut.bind(this);

        this.state = {
            moment: moment(),
            showPopover: false,
            popoverTitle: null,
            popoverContent: null,
            popoverTarget: null,
        };
    }

    handleNextMonth() {
        this.setState({
            moment: this.state.moment.add(1, 'M'),
        });
    }

    handlePreviousMonth() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M'),
        });
    }

    handleToday() {
        this.setState({
            moment: moment(),
        });
    }

    handleEventMouseOver(target, data) {
        this.setState({
            showPopover: true,
            popoverTarget: () => ReactDOM.findDOMNode(target),
            popoverTitle: data.title,
            popoverContent: data.description,
        });
    }

     handleEventMouseOut() {
        this.setState({
            showPopover: false,
        });
     }

    handleEventClick(ref, data) {
        alert('Maybe you want to go somewhere!')
    }

    getState(now) {
        return {
            moment: now,
        };
    }

    getHumanDate() {
        return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    }

	render() {

        const styles = {
            position: 'relative',
        };

		return (
            <div style={styles}>
            <Overlay
                show={this.state.showPopover}
                rootClose={true}
                onHide = {()=>this.setState({showPopover: false, })}
                placement="top"
                container={this}
                target={this.state.popoverTarget}>
              <Popover id="event" title={this.state.popoverTitle}>{this.state.popoverContent}</Popover>
            </Overlay>
                <Row>
                    <Col xs={4}>
                        <ButtonToolbar>
                            <Button onClick={this.handlePreviousMonth}>&lt;</Button>
                            <Button onClick={this.handleNextMonth}>&gt;</Button>
                            <Button onClick={this.handleToday}>Today</Button>
                        </ButtonToolbar>
                    </Col>
                     <Col xs={4}>
                        <div className="h3 push-left">{this.getHumanDate()}</div>
                     </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={12} style={{width:'80%'}}>
                        <EventCalendar
                            ref={(component) => this.eventCalendar = component}
                            month={this.state.moment.month()}
                            year={this.state.moment.year()}
                            events={createSchedule(maxQuestionsPerDay(this.props.settings.minPerDay, this.props.settings.reviewTime, this.props.settings.minPerQuestion), this.props.topics)}
                            onEventClick={this.handleEventClick}
                            onEventMouseOver={this.handleEventMouseOver}
                            onEventMouseOut={this.handleEventMouseOut}
                            />
                    </Col>
                </Row>
            </div>
		);
	}
}

export default Calendar;
