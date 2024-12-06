import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/SmallSidebar.module.css';

import links from '../utils/links';
import close from '../assets/close.svg';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <div
      className={
        showSidebar
          ? `${styles.sidebarContainer} ${styles.showSidebar}`
          : styles.sidebarContainer
      }
    >
      <div className={styles.content}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={toggleSidebar}
        >
          <img src={close} alt="close button" />
        </button>
        <header>
          <Logo />
        </header>
        <div className={styles.navLinks}>
          {links.map((link) => {
            const { text, path, icon } = link;
            return (
              <NavLink
                to={path}
                key={text}
                end
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={toggleSidebar}
              >
                <span className={styles.icon}>{icon}</span>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SmallSidebar;
