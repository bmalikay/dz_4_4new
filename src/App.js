import React, { useState, useEffect } from 'react';
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = prompt('Как вас зовут?');
    const lastName = prompt('Ваша фамилия?');
    setUser({ name, lastName });
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  if (user.name === 'John' && user.lastName === 'Johns') {
    return <MainPage user={user} />;
  } else {
    return <ErrorPage user={user} />;
  }
}

export default App;
