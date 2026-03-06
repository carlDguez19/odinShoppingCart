import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

export function Nav({totItems}){
    return (
        <nav>
            <ul className={styles.navi}>
                {/* Main navigation links */}
                <li>
                    <Link to="/"><h2>Home</h2></Link>
                </li>
                <li>
                    <Link to="/shop"><h2>Shop</h2></Link>
                </li>

                {/* Cart link showing current total items */}
                <li className={styles.cartNav}>
                    <Link to="/cart"><h2>Cart {totItems}</h2></Link>
                </li>
            </ul>
        </nav>
    )
}