import React from 'react';
import {User} from "./App";

interface IProps {
    users: User[]
}

const TodoList: React.FC<IProps> = ({users}) => {

    const renderList = (): JSX.Element[] =>
        users.map((user, index) => <div key={index}>
                <p>Id: {user.id}</p>
                <p>User Id: {user.userId}</p>
                <p>Title: {user.title}</p>
                <hr/>
            </div>
        );

    return (
        <>
            {
                renderList()
            }
        </>
    );
};

export default TodoList;