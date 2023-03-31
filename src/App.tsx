import { Header, Footer } from "./components";
import Container from "./components/Container/Container";
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
