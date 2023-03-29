import { Header, Footer } from "./components";
import Router from "./router/Router";
import s from "./App.module.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className={s.body_container}>
        <Router />
      </div>
      <Footer />
    </>
  );
};
export default App;
