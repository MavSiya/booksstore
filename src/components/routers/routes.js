import Auth from "../../pages/Auth"
import Home from "../../pages/Home"
import Registration from "../../pages/Registration"
import { AUTH_ROUTE, CATALOG_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, BOOK_PAGE, SELLER_PAGE, INFO_BOOK_PAGE, ORDER_PAGE } from "../../utils/consts"
import Catalog from "../../pages/Catalog"
import BookPage from "../../pages/BookPage"
import SellerPage from "../../pages/SellerPage"
import {Checkout} from "../../components/Checkout/Checkout"
import BookDetails from "../BookPage/BookDetails";

export const authRoutes = [
   {
      path: HOME_ROUTE,
      Component: Home
   },
   {
      path: ORDER_PAGE,
      Component: Checkout
   }
]

export const publicRoutes = [
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
   },
   {
      path: BOOK_PAGE,
      Component: BookPage
   }
   ,
   {
      path: SELLER_PAGE,
      Component: SellerPage
   },
   {
      path: INFO_BOOK_PAGE,
      Component: BookDetails
   }

]
