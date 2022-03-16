import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../router";


const AppRouter = () => {

    return (

            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path= '*' element ={<Navigate to='/about'/>}/>
            </Routes>
    );
};

export default AppRouter;
