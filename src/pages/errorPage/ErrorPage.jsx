import React, { useState, useEffect } from 'react';

function ErrorPage({ user }) {
    const [userInfo, setUserInfo] = useState({ name: '', lastName: '' });

    useEffect(() => {
        setUserInfo(user);
    }, [user]);

    return (
        <div>
            <h1>Тебе сюда нельзя – {userInfo.name} {userInfo.lastName}!</h1>
        </div>
    );
}

export default ErrorPage;
