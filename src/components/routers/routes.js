import Auth from "../../pages/Auth"
import Home from "../../pages/Home"
import Registration from "../../pages/Registration"
import { AUTH_ROUTE, CATALOG_ROUTE, PAGE_BUYER_ROUTE, REGISTRATION_ROUTE, PAGE_SELLER_ROUTE } from "../../utils/consts"
import PageBuyer from "../../pages/PageBuyer"
import PageSeller from "../../pages/PageSeller"

export const authRoutes = [
{
path: PAGE_BUYER_ROUTE,
Component: PageBuyer
},
{
path: PAGE_SELLER_ROUTE,
Component: PageSeller
 },
]

export const publicRoutes =[
    {
        path: AUTH_ROUTE,
        Component: Auth
        },
        {
        path: REGISTRATION_ROUTE,
        Component: Registration
         },
         {
            path: CATALOG_ROUTE,
            Component: Home
            }
]
