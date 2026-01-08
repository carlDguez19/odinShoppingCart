import { App } from "./App"
import { ErrorPage } from "./ErrorPage"
import { Home } from "./Home/Home"
import { Shop } from "./Shop/ShopFetch"
import { Cart } from "./Cart/Cart"

export const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>}, //default page loaded as soon as user visits our page
            {path: "shop", element: <Shop/>},
            {path: "cart", element: <Cart/>},
        ]
    }
]