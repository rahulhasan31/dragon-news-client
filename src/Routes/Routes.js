import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "../Others/PrivateRoute/PrivateRoute";
import Profile from "../Others/Profile";
import TermsAndCondition from "../Others/TermsAndConditon/TermsAndCondition";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const routes= createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute> ,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile> 
            }, 
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            }
        ]

    }
])