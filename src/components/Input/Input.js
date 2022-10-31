import React from "react";
import styled from "styled-components";

const Input = ({inputValue, handleInputChange}) => {
    return (
        <label> Zadanie :
            <InputStyled type="text" value={inputValue} onChange={handleInputChange}></InputStyled>
        </label>
    )
}

const InputStyled = styled.input`
    margin: 0px 5px;
    border-radius: 5px;
`

export default Input;