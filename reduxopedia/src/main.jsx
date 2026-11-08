import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { store } from "./redux/store";
import DestinationFact from "./components/DestinationFact";
import ResetApp from "./components/ResetApp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 row">
          <div className="col-12">
            <ResetApp/>
            <Counter />
            <div className="p-3 m-4 border">
              <h4 className="text-success pb-4 text-center">Destination List</h4>
              <DestinationList />
              <DestinationFact/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);
