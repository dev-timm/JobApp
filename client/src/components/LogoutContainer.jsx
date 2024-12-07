import styles from '../styles/LogoutContainer.module.css';

import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';

import profile from '../assets/profile-placeholder.svg';
import arrowDown from '../assets/arrow-down.svg';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div className={styles.logoutContainer}>
      <button
        type="button"
        className={styles.logoutBtn}
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className={styles.img} />
        ) : (
          <img src={profile} alt="avatar placeholder" />
        )}

        {user?.name}
        <img src={arrowDown} alt="arrow down" />
      </button>
      <div
        className={
          showLogout
            ? `${styles.dropdown} ${styles.showDropdown}`
            : styles.dropdown
        }
      >
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default LogoutContainer;
