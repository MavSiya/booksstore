import Auth from "../../pages/Auth"
import Home from "../../pages/Home"
import Registration from "../../pages/Registration"
import { AUTH_ROUTE, CATALOG_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../../utils/consts"
import Catalog from "../Catalog"

export const authRoutes = [
{
path: HOME_ROUTE,
Component: Home
}
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
            Component: Catalog
            }
]
