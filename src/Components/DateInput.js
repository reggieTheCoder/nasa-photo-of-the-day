import React from "react";


const DateInput = (props) => {
    return (
        <form onSubmit={props.newDate}>
       Enter Date (YYYY-MM-DD)
        <input />
        <input type="submit" />
      </form>
    );
};


export default DateInput;

