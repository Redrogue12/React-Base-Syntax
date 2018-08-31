import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <form>
        <label htmlFor="nameInput">Enter Name:
          <input className="nameInput" name="nameInput" type="text"></input>
        </label>
      </form>
    </div>
  )
}

export default userInput;
