import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/BigSidebar.module.css';
import close from '../assets/close.svg';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <div
      className={
        showSidebar
          ? styles.sidebarContainer
          : `${styles.sidebarContainer} ${styles.showSidebar}`
      }
    >
      <div className={styles.content}>
        <header>
          <Logo />
        </header>
        <div className={styles.links}>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </div>
  );
};
export default BigSidebar;
