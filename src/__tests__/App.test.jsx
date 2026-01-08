import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";

import { App } from "../App.jsx"
import { ErrorPage } from "../ErrorPage.jsx"
import { Home } from "../Home/Home.jsx"
import { Shop } from "../Shop/ShopFetch.jsx"
import { Cart } from "../Cart/Cart.jsx"

import { useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";

beforeEach(() => {
    global.fetch = vi.fn(() => 
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve([
                {
                    id:1,
                    title: "Test Product",
                    price: 10,
                    description: "A test product",
                    category: "test",
                    image: "test.jpg",
                },
            ]),
    })
    );
});

const testRoutes = [
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

test("renders the home page by default", () =>{
    const router = createMemoryRouter(testRoutes, {initialEntries: ["/"],});
    
    render(
        <RouterProvider router={router} />
    );

    const homeText = screen.getByText(
        /Welcome to the coolest of online shops with the simplest of home pages!/i
    );

    expect(homeText).toBeInTheDocument();
});

test("testing shop link works when clicked", async () => {
    const router = createMemoryRouter(testRoutes, {initialEntries: ["/"]});

    render(<RouterProvider router={router}/>);

    const user = userEvent.setup();

    const shopLink = screen.getByRole("link", {name: /shop/i});
    await user.click(shopLink);

    const products = await screen.findAllByText(/test product/i);
    expect(products.length).toBeGreaterThan(0);
});

// vi.mock("react-router", () => ({
//     ...vi.importActual("react-router"),
//     useOutletContext: () => ({
//         products: [],
//         setproducts: vi.fn(),
//         setTotItems: vi.fn(),
//     }),
// }));

// test("renders shop directly with mocked context", async () => {
//     render(<Shop/>);
//     const loadingMessage = await screen.findByText(/products loading... please wait/i);
//     expect(loadingMessage).toBeInTheDocument();
// })