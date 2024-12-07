import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/ThemeToggle.module.css';

import darkTheme from '../assets/dark-theme.svg';
import lightTheme from '../assets/light-theme.svg';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div onClick={toggleDarkTheme} className={styles.themeContainer}>
      {isDarkTheme ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.toggleIcon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9079 15.5156C15.4791 15.5153 14.0703 15.1801 12.7944 14.5369C11.5186 13.8938 10.4112 12.9605 9.56125 11.8121C8.71124 10.6637 8.14224 9.332 7.89988 7.92393C7.65752 6.51586 7.74855 5.07058 8.16566 3.70404C6.78112 4.34222 5.57828 5.3167 4.66672 6.53869C3.75516 7.76069 3.16386 9.19136 2.94669 10.7004C2.72953 12.2093 2.8934 13.7487 3.42338 15.1781C3.95336 16.6076 4.8326 17.8817 5.98099 18.8844C7.12939 19.8871 8.51043 20.5865 9.99829 20.9189C11.4862 21.2513 13.0335 21.2061 14.4995 20.7875C15.9654 20.3688 17.3033 19.59 18.3912 18.522C19.4791 17.454 20.2825 16.1307 20.7282 14.6728C19.5311 15.2279 18.2274 15.5155 16.9079 15.5156Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.986 4.26562H16.2047"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0953 2.15625V6.375"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3141 8.48438H21.1266"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7203 7.07812V9.89062"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.toggleIcon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_111_280)">
            <path
              d="M5.25 12C5.25 13.7902 5.96116 15.5071 7.22703 16.773C8.4929 18.0388 10.2098 18.75 12 18.75C13.7902 18.75 15.5071 18.0388 16.773 16.773C18.0388 15.5071 18.75 13.7902 18.75 12C18.75 10.2098 18.0388 8.4929 16.773 7.22703C15.5071 5.96116 13.7902 5.25 12 5.25C10.2098 5.25 8.4929 5.96116 7.22703 7.22703C5.96116 8.4929 5.25 10.2098 5.25 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2.25V0.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.894 5.10598L19.955 4.04498"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.75 12H23.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.894 18.894L19.955 19.955"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21.75V23.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.10604 18.894L4.04504 19.955"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25 12H0.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.10604 5.10598L4.04504 4.04498"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_111_280">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
