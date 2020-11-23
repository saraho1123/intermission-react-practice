import React from 'react';

const Idea = (props) => {
  return (
    <section>
      <h1 className="name">{props.name}</h1>
      <h2 className="idea">{props.idea}</h2>
    </section>
  )
}

export default Idea;