import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>
        </nav>
    )
}