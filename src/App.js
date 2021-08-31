import BasementInternship from "./components/BasementInternship";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1>Basement internship</h1>

      <BasementInternship />
    </div>
  );
}

export default App;
