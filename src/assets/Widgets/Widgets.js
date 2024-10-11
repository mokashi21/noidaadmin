import React from 'react';
import "./Widgets.scss"

const data = [
  {
    "title": "Number of Properties",
    "number": 25,
    "desc": "Lorem ipsum"
  },
  {
    "title": "Average Occupancy Rate",
    "percentage": "85%",
    "desc": "Dolor sit"
  },
  {
    "title": "Average Vacancy Rate",
    "percentage": "15%",
    "desc": "Amet lorem"
  },
  {
    "title": "Overall Net Profit",
    "money": "$120,000",
    "desc": "Consectetur elit"
  }
];

const Widgets = () => {
  return (
    <div className='mainWidget'>
      {
        data.map((item, index) => (
          <div key={index} className={`widgetContainer widget-${index + 1}`}>
            <div className='widgetsub' >
              <p className='widgetTitle' >{item.title}</p>
              <p className='widgetData' >{ item.number || item.percentage || item.money }</p> 
              <p className='widgetDesc' >{item.desc}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Widgets;
