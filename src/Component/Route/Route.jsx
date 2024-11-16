import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import GegetCard from "../GegetCard/GegetCard";
import Details from "../GadgetDetails/Details";
import AddCard from "../AddCard/AddCard";
import WishListCard from "../WishlistCard/WishListCard";
import Statics from "../Statics/Statics";
import HotDeals from "../BestSells/HotDeals";
import Categories from "../Categories/Categories";
import Errorcard from "../ErrorCard/Errorcard";



const route = createBrowserRouter([
    {
        path: '/',
        errorElement:<Errorcard></Errorcard>,
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/category.json'),
                children: [
                    {
                        path: '/',
                        element: <GegetCard></GegetCard>,
                        loader: () => fetch('/geget.json')
                    },
                    {
                        path: '/category/:category',
                        element: <GegetCard></GegetCard>,
                        loader: () => fetch('/geget.json')
                    }
                ]
            },

            {
                path: 'gadget/:id',
                element: <Details></Details>,
                loader: () => fetch('/geget.json')
            },
            {
                path: 'statistics',
                element: <Statics />
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '',
                        element: <AddCard></AddCard>
                    },
                    {
                        path: 'addcard',
                        element: <AddCard></AddCard>
                    },
                    {
                        path: 'wishlist',
                        element: <WishListCard />
                    }
                ]

            },
            {
                path: '/hotdeals',
                element: <HotDeals />,
                loader: () => fetch('../hotdeals.json')
            },
        ]
    }
])

export default route