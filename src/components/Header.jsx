import { Link } from "react-router-dom";
import classes from  "./Header.module.css"
export default function Header(){
    return(
        <Link to="/">
        <h1 className={classes.h1}>My Website</h1>
        </Link>
        
    );
}