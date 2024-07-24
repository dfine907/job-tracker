import React from 'react'

function TestProp(props) {
  

  return (
    <>
      <main>
        <div className="test-prop">
          <h2>Delete Me!</h2>

          <h3>Prop Testing Here</h3>
          <p>My Friend's Name is <span className='span'>{props.name} </span></p>
        </div>
      </main>
    </>
  )
}

export default TestProp
