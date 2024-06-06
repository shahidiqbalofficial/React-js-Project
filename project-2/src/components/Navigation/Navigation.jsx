import styles from "./Navigation.module.css";
 

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="http://">About</a></li>
        <li><a href="http://">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
