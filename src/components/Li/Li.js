import React from "react";
import styled from "styled-components";

const Li = ({deleteTodo, item}) => {
    return (
        <LiItem  onClick={() => deleteTodo(item.id)}>{item.duty}</LiItem>
    )
}

const LiItem = styled.li`
    list-style: none;
    margin-top: 10px;
    &:hover {
        cursor: pointer;
        color: #f2bbbb;
        transition: color .3s;
    }
`

export default Li;