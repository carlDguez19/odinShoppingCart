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

test("testing cart ling works when clicked", async () => {
    const router = createMemoryRouter(testRoutes, {initialEntries: ["/"]});

    render(
        <RouterProvider router = {router}/>
    )

    const user = userEvent.setup();

    const cartLink = screen.getByRole("link", {name: /cart/i});
    await user.click(cartLink);

    const cartClass = await screen.getByTestId("cartPageDiv")
    expect(cartClass).toBeInTheDocument();
})

test("select quantity add to cart and check total in nav", async () => {
    const router = createMemoryRouter(testRoutes, {initialEntries: ["/"]});

    render(
        <RouterProvider router={router}/>
    )

    const user = userEvent.setup();

    const shopLink = screen.getByRole("link", {name: /shop/i});
    await user.click(shopLink);

    const plusButtons = screen.getAllByRole("button", {name: "+"});
    await user.click(plusButtons[0]);//quantity becomes 1

    const addToCartButons = screen.getAllByRole("button", {name: /add to cart/i});
    await user.click(addToCartButons[0]);

    const cartCount = screen.findByText(/cart\s*1/i);
    expect(cartCount).toBeInTheDocument();

    screen.debug();
})