import styles from './App.module.scss';
import BasementInternship from './components/BasementInternship';

function App() {
  return (
    <div className={styles.app}>
      <h1>Basement internship</h1>

      <BasementInternship />
    </div>
  );
}

export default App;
