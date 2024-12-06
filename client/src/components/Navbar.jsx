import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/Navbar.module.css';

import menu from '../assets/menu.svg';
import Logo from './Logo';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className={styles.navbar}>
      <div className={styles.navCenter}>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={toggleSidebar}
        >
          <img src={menu} alt="sidebar button" />
        </button>
        <Logo />
        <div className={styles.btnContainer}>toggle/logout</div>
      </div>
    </div>
  );
};
export default Navbar;
