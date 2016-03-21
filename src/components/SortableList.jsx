import React, { Component } from 'react';
import update from 'react/lib/update';
import Card from './Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const style = {
  width: 280
};

class SortableList extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.props.moveCard.bind(this);
  }
  /*
  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  } */

  render() {
    const cards = this.props.cards;

    return (
      <div style={style}>
        {cards.map((card, i) => {
          return (
            <b><Card key={card.id}
                  index={i}
                  id={card.id}
                  name={card.name}
                  questionCount={card.questionCount}
                  moveCard={this.props.moveCard} /></b>
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(SortableList);
