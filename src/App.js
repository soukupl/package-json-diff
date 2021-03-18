import Styles from "./App.module.scss";
import DiffTable from "./Components/DiffTable";

const data = [
  { package: "lorem ipsum", ver1: "^1.3.2", ver2: "2.1.1", ver: "" },
  { package: "react", ver1: "^1.3.2", ver2: null, ver: "17.0.1" },
  { package: "react-deom", ver1: null, ver2: "2.1.1", ver: "" },
];

function App() {
  return (
    <section className={Styles.wrap}>
      <header className={Styles.topbar}>
        <h1>Package.json DIFF tool</h1>
      </header>
      <section className={Styles.main}>
        <div className={Styles.files}>
          <div className={Styles.file}>file 1</div>
          <div className={Styles.file}>file 2</div>
        </div>
        <div className={Styles.diff}>
          <DiffTable data={data} />
        </div>
      </section>
    </section>
  );
}

export default App;
