import React from 'react';
import './Form.css';

function Form( { shakeBall, showTriangle, formValue, updateInput, clearInput} ) {

    function handleClick() {
        clearInput();
        shakeBall();
        showTriangle();
    }

    function handleChange(event) {
        updateInput(event.target.value)
    }

    return (
        <form>
            <textarea onChange={(event) => handleChange(event)} name="question" rows="3" cols="20" value={`${formValue}`}/>
            <button type="button" onClick={() => handleClick()}>Shake it!</button>
        </form>
    )
}

export default Form;