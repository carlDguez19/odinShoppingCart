import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

export function Nav(){
    return (
        <nav>
            <ul className={styles.navi}>
                <li>
                    <Link to="/"><h2>Home</h2></Link>
                </li>
                <li>
                    <Link to="shop"><h2>Shop</h2></Link>
                </li>
                <li>
                    <Link to="cart"><h2>Cart</h2></Link>
                </li>
            </ul>
        </nav>
    )
}