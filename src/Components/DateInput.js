import React from "react";


const DateInput = (props) => {
    return (
        <form onSubmit={props.newDate}>
       Enter Date (YYYY-MM-DD)
        <input />
        <button type="submit">Submit</button>
      </form>
    );
};


export default DateInput;

