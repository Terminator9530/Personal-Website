import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Language from './components/Language';

var codingSkills=[
  {title:"React JS",star:[1,1,1,0,0]},
  {title:"Node JS",star:[1,1,1,0,0]},
  {title:"MongoDB",star:[1,1,1,1,0]},
  {title:"Bootstrap",star:[1,1,1,1,1]},
  {title:"Materialize CSS",star:[1,1,1,1,0]},
  {title:"HTML",star:[1,1,1,1,1]},
  {title:"Javascript",star:[1,1,1,1,1]},
  {title:"PHP",star:[1,1,1,1,0]},
  {title:"Flutter",star:[1,1,0,0,0]},
  {title:"Unity 3D",star:[1,1,0,0,0]},
  {title:"Python",star:[1,1,1,1,0]},
  {title:"CSS",star:[1,1,1,1,1]},
  {title:"MySQL",star:[1,1,1,1,1]},
  {title:"Jquery",star:[1,1,1,1,0]}
];

var languageSkills=[
  {title:"English",star:[1,1,1,1,1]},
  {title:"Hindi",star:[1,1,1,1,1]},
]

ReactDOM.render(<App skills={codingSkills} />,
  document.getElementById('codingSkills')
);

ReactDOM.render(<Language skills={languageSkills} />,
  document.getElementById('languageSkills')
);