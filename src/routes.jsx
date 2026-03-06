import { App } from "./App"
import { ErrorPage } from "./ErrorPage"
import { Home } from "./Home/Home"
import { Shop } from "./Shop/ShopFetch"
import { Cart } from "./Cart/Cart"

export const routes = [
    {
        path: "/",
        element: <App/>,//parent layout component(Nav + Outlet)
        errorElement: <ErrorPage/>,//Fallback for routing errors
        children: [
            {index: true, element: <Home/>}, //default page loaded as soon as user visits our page
            {path: "shop", element: <Shop/>},//Shop page (Nav + product list)
            {path: "cart", element: <Cart/>},//Cart page (Nav + items in cart)
        ]
    }
]