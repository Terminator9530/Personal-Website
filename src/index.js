import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var skills=[
  {title:"React JS",star:[1,1,1,0,0]},
  {title:"Node JS",star:[1,1,1,1,0]},
  {title:"MongoDB",star:[1,1,1,1,0]},
  {title:"Bootstrap",star:[1,1,1,1,0]},
  {title:"Materialize CSS",star:[1,1,1,1,0]},
  {title:"HTML",star:[1,1,1,1,0]},
  {title:"Javascript",star:[1,1,1,1,0]},
  {title:"PHP",star:[1,1,1,1,0]},
  {title:"Flutter",star:[1,1,1,1,0]},
  {title:"Unity 3D",star:[1,1,1,1,0]},
];

ReactDOM.render(<App skills={skills} />,
  document.getElementById('codingSkills')
);