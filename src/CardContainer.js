import React from 'react';
import Idea from './Idea';

const CardContainer = (props) => {
  console.log(props)
  const allIdeas = props.ideas.map(idea => {
    return (
      <Idea name={idea.name} idea={idea.idea} id={idea.id}/>
    )
    // delete method called here
  })

  return (
    <div>
      {allIdeas}
    </div>
  )
}


// idea component and import to CardContainer
// idea will also be a functional component
// will not have state
// will pretty much be a blob of HTML code
// Idea 
// will have a delete button
// will get onclick for deleting
// give that button an id which will be idea.id
//

export default CardContainer;