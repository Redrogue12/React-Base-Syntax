import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <form>
        <label htmlFor="nameInput">Enter Name:
          <input className="nameInput" name="nameInput" type="text"></input>
        </label>
        <button type="submit" onClick={props.submitName} value={props.name}>Submit</button>
      </form>
    </div>
  )
}

export default userInput;
