import styles from "./navbar.module.css";
import loader from "./loader";

const navbar = (props) => {
   return (
      <object id="ovaNavBar" onLoad={loader(props)} className={styles.navbar}
         type="image/svg+xml" data="/images/ovas/template/ovaNavBar.svg" />
   );
}

export default navbar;