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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_109_264)">
              <path
                d="M6.75 9.75C6.75 11.1424 7.30312 12.4777 8.28769 13.4623C9.27226 14.4469 10.6076 15 12 15C13.3924 15 14.7277 14.4469 15.7123 13.4623C16.6969 12.4777 17.25 11.1424 17.25 9.75C17.25 8.35761 16.6969 7.02226 15.7123 6.03769C14.7277 5.05312 13.3924 4.5 12 4.5C10.6076 4.5 9.27226 5.05312 8.28769 6.03769C7.30312 7.02226 6.75 8.35761 6.75 9.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.913 20.876C18.0072 19.9645 16.9301 19.2412 15.7437 18.7476C14.5573 18.254 13.285 17.9998 12 17.9998C10.715 17.9998 9.4427 18.254 8.25629 18.7476C7.06987 19.2412 5.99279 19.9645 5.08701 20.876"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.75 12C0.75 14.9837 1.93526 17.8452 4.04505 19.955C6.15483 22.0647 9.01631 23.25 12 23.25C14.9837 23.25 17.8452 22.0647 19.955 19.955C22.0647 17.8452 23.25 14.9837 23.25 12C23.25 9.01631 22.0647 6.15483 19.955 4.04505C17.8452 1.93526 14.9837 0.75 12 0.75C9.01631 0.75 6.15483 1.93526 4.04505 4.04505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_109_264">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        {user?.name}
        <svg
          className={styles.arrowDown}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_109_268)">
            <path
              d="M15.5477 5.96487L8.84767 12.6642C8.80417 12.7078 8.75254 12.7423 8.69573 12.7659C8.63886 12.7895 8.57792 12.8016 8.51642 12.8016C8.45492 12.8016 8.39398 12.7895 8.33711 12.7659C8.28029 12.7423 8.22867 12.7078 8.18517 12.6642L1.48517 5.96487"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_109_268">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.516418 0.895508)"
              />
            </clipPath>
          </defs>
        </svg>
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
