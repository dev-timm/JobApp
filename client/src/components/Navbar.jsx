import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/Navbar.module.css';

import Logo from './Logo';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.menu}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.45312 18.4686H8.29688"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.45312 12H15.3281"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.45312 5.53137H22.5469"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Logo />
        <div className={styles.btnContainer}>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
