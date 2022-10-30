
export const getTodos = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e.message) )
}

export const postTodos = (url, todo) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then((response) => response.json())
    .catch((e) => console.log(e.message))
}

export const deleteTodoFromServer = (url, id) => {
    return fetch(`${url}${id}`, {
        method: "DELETE"
    })
    .catch((e) => console.log(e.message))
}