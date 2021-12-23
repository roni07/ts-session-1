import React, {useState} from 'react';
import {User} from "./App";

interface UserForm {
    userId: string,
    id: string,
    title: string,
}

interface IProps {
    handleSubmit(arg: User): void,

    // setUsers: React.Dispatch<React.SetStateAction<User[]>>,
}

const TodoForm: React.FC<IProps> = ({handleSubmit}) => {

    const [user, setUser] = useState<UserForm>({
        id: "",
        userId: "",
        title: ""
    });
    // const [user, setUser] = useState<User | null>(null);

    const handleChangeInput = (v: React.ChangeEvent<HTMLInputElement>) => {
        const _user = {...user, [v.target.name]: v.target.value};
        setUser(_user);
    }

    const submit = () => {
        const _user = {
            id: parseInt(user.id ?? 0),
            userId: parseInt(user.userId ?? 0),
            title: user.title,
        }
        handleSubmit(_user);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="id"
                    value={user.id}
                    placeholder="ID"
                    onChange={handleChangeInput}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="userId"
                    value={user.userId}
                    placeholder="User Id"
                    onChange={handleChangeInput}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="title"
                    value={user.title}
                    placeholder="Title"
                    onChange={handleChangeInput}
                />
            </div>

            <div>
                <button
                    onClick={submit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default TodoForm;