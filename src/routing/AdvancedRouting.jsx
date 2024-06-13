import React from 'react';
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contacts from "../components/Contacts";
import ErrorPage from "../components/ErrorPage";


const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if ( response.ok )
        return await response.json();
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: fetchData,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contacts />,
            },
        ],
    },
]);




// MAIN ROUTING COMPONENT
const AdvancedRouting = () => <RouterProvider router={router}/>;


export default AdvancedRouting;