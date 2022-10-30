import React from "react";
import styled from "styled-components";
import Li from "../Li/Li";

const Todos = ({todos, deleteTodo}) => {
    return (
        <>
            {todos.map((item) => {
                return <Li key={item.id} deleteTodo={deleteTodo} item={item}/>
            }) ?? null}
        </>
    )
}

export default Todos;