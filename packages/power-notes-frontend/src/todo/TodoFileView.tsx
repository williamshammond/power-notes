import React from "react";
import { useParams } from "react-router-dom";

interface Task {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly subtasks?: ReadonlyArray<Task>;
}

interface Todo {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly tasks: ReadonlyArray<Task>;
}

export function TodoFileView() {
    const [jouralContent, setTodoContent] = React.useState("");

    const { todoId } = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:3000/todo/${todoId}`)
            .then((res) => {
                console.log(res);
                return res.json() as Promise<Todo>;
            })
            .then((data) => setTodoContent(data.name));
    }, [todoId]);

    return <div>{jouralContent}</div>;
}