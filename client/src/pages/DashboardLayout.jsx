import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

import styles from '../styles/Dashboard.module.css';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../App';

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
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
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
