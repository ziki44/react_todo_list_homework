
export const getTodos = () => {
    fetch("http://localhost:3004/todos")
    .then((response) => response.json())
}