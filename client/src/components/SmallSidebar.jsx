import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/SmallSidebar.module.css';
import close from '../assets/close.svg';
import Logo from './Logo';
import NavLinks from './NavLinks';

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
        <NavLinks />
      </div>
    </div>
  );
};
export default SmallSidebar;
