import React from 'react';
import Moment from 'react-moment';

const Days = (props) => {

    const date = new Date()

  return (
    <div className="card-action">
        <a href onClick={() => props.chooseDay("day1")}>
            <Moment format="dddd">{date}</Moment>
        </a>
        <a href onClick={() => props.chooseDay("day2")}>
            <Moment format="dddd" add={{ days: 1 }}>{date}</Moment>
        </a>
        <a href onClick={() => props.chooseDay("day3")}>
            <Moment format="dddd" add={{ days: 2 }}>{date}</Moment>
        </a>
        <a href onClick={() => props.chooseDay("day4")}>
            <Moment format="dddd" add={{ days: 3 }}>{date}</Moment>
        </a>
        <a href onClick={() => props.chooseDay("day5")}>
            <Moment format="dddd" add={{ days: 4 }}>{date}</Moment>
        </a>
    </div>

  );
}

export default Days;
