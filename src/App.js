import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Template from "./routes/Template";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home pageTitle="We Say So Homepage" />} />
          <Route path="expenses" element={<Expenses pageTitle="We Say So Expenses" />} />
          <Route path="invoices" element={<Invoices pageTitle="We Say So Invoices" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
