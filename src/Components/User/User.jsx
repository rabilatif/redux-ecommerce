import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../Redux/UserSlice/UserSlice';
import Api from '../../Api/api';

export const User = () => {
    const dispatch = useDispatch();
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await Api.getUsersApi();
                setUsersData(users.data);
            } catch (err) {
                console.log("error");
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <button onClick={() => dispatch(getUsers(usersData))}>Button</button>
        </>
    );
}

export default User;
