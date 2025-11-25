import { App } from "./App"
import { ErrorPage } from "./ErrorPage"

export const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "shop", element: <Shop/>},
            {path: "cart", element: <Cart/>},
        ]
    }
]