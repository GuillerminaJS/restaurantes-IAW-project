import React, { useEffect, useState } from 'react'
import UserContext from './UserContext';

const UserState = (props) => {
    const userInit = {
        "id": 1,
        "name": "loading",
        "surnames": "loading",
        "rol": "loading",
        "language": "en"
    };
    const [user, setUser] = useState(userInit)

    const getUser = async () => {
        const response = await fetch('/data/user.json');
        const data = await response.json();
        setUser({
            ...user,
            "name": data.name,
            "surnames": data.surnames,
            "language": data.language,
            "role": data.role

        });
    }

    useEffect(() => {
        getUser();
    }, [])



    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState