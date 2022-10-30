import React from "react";
import styled from "styled-components";

const Input = ({inputValue, handleInputChange}) => {
    return (
        <label> Zadanie :
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
        </label>
    )
}

export default Input;