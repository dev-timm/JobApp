import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

import styles from '../styles/Dashboard.module.css';

const DashboardLayout = () => {
  return (
    <main className={styles.dashboard}>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className={styles.dashboardPage}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
