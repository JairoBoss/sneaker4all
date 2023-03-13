import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoutes } from './routes';
import { publicRoutes } from './routes/publicRoutes';



const App = () => {

    const [currentUser, setCurrentUser] = useState();

    const getRoutes = () => {
        if (!currentUser) return publicRoutes;
        return createRoutes(currentUser.usuario);
    };

    const getUser = () => {
        const currentUser = localStorage.getItem("_user");
        setCurrentUser(currentUser);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <RouterProvider router={createBrowserRouter(getRoutes())}>

        </RouterProvider>
    );
}

export default App;
