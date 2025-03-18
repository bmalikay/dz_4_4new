import React, { useState, useEffect } from 'react';

function MainPage({ user }) {
    const [userInfo, setUserInfo] = useState({ name: '', lastName: '' });

    useEffect(() => {
        setUserInfo(user);
    }, [user]);

    return (
        <div>
            <h1>Добро пожаловать, {userInfo.name} {userInfo.lastName}, !</h1>
        </div>
    );
}

export default MainPage;
