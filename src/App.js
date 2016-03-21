import React, { Component } from 'react';
import Step from './components/Step';
import Calendar from './components/Calendar'
import Navigation from './components/Navigation'
import SortableList from './components/SortableList'
import SummaryContainer from './containers/SummaryContainer'
import SettingsContainer from './containers/SettingsContainer'
import TopicsContainer from './containers/TopicsContainer'
import CalendarContainer from './containers/CalendarContainer'
import SortableContainer from './containers/SortableContainer'
import './extra.css'
import 'react-widgets/lib/less/react-widgets.less';

export default class App extends Component {
  render() {
    return (

      <div>
      <Navigation />
      <div className="container">

      <Step number={1} text="Determine your study schedule" />
      <SettingsContainer />

      <Step number={2} text="Select which topics you want to study" />
      <TopicsContainer />

      <Step number={3} text="Drag your selected topics into the order you want" />

      <SortableContainer />
      <Step number={4} text="Review your study plan" />
      <SummaryContainer />
      <br />
      <CalendarContainer />
      </div>
  </div>
    );
  }
}
