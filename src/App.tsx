import { Header, Footer, Container } from "./components";
import Router from "./router/Router";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Router />
      </Container>
      <Footer />
    </>
  );
};
export default App;
