import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Cards'
import Sdata from './Sdata'

function ncards(val) {
  return (
    <Cards
      imgsrc={val.imgsrc}
      category={val.category}
      title={val.title}
      link={val.link}
    />
  )
}


ReactDOM.render(
  <>
  <h1 className="heading">TOP NETFLIX WEBSERIES</h1>
  <div className="container">
   {Sdata.map(ncards)}
   </div>
   <App/>

  </>,
  document.getElementById('root')
);

