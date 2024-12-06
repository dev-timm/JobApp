import { useDashboardContext } from '../pages/DashboardLayout';
import styles from '../styles/SmallSidebar.module.css';

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);

  return <div className={styles.smallSidebar}>SmallSidebar</div>;
};
export default SmallSidebar;
