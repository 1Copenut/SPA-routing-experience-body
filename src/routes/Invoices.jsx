import DocumentHead from "../components/DocumentHead/DocumentHead";
import PageLiveRegion from "../components/PageLiveRegion/PageLiveRegion";
import Header from "../components/Header/Header";
import { MAIN_ID } from "../constants";

const Invoices = props => {
  const {
    handleSkipLink,
    pageTitle,
    skipLinkVisible
  } = props;

  return (
    <>
      <DocumentHead pageTitle={pageTitle} />
      <PageLiveRegion pageTitle={pageTitle} />
      <Header handleSkipLink={handleSkipLink} skipLinkVisible={skipLinkVisible} />

      <main className="continuum-global-main" id={MAIN_ID}>
        <h1>Invoices</h1>
        <a href="https://github.com/1Copenut/SPA-routing-experience">GitHub link to verify focus</a>
        <p>We are invoicing for Q3 FY2022 this month. Outstanding invoices and details are below.</p>
        <h2>Outstanding invoices</h2>
        <table className="continuum-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Due date</th>
              <th scope="col">Amount<br/>(in USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Acme Corp.</th>
              <td>Platform shoes for video game speed run</td>
              <td>June 30, 2022</td>
              <td>$3,183.99</td>
            </tr>
            <tr>
              <th scope="row">Rent-a-carpet-cleaner</th>
              <td>Carpet cleaning for the retail spaces</td>
              <td>June 30, 2022</td>
              <td>$976.99</td>
            </tr>
            <tr>
              <th scope="row">Midtown Pizzaria</th>
              <td>Catered lunch for June security meet-up</td>
              <td>June 27, 2022</td>
              <td>$129.84</td>
            </tr>
            <tr>
              <th scope="row">McGuffin Airlines</th>
              <td>Two plane tickets for travel to security conference</td>
              <td>June 18, 2022</td>
              <td>$767.13</td>
            </tr>
            <tr>
              <th scope="row">Desert Inn Hotel</th>
              <td>Hotel rooms for security conference stay</td>
              <td>June 20, 2022</td>
              <td>$2,451.86</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Invoices;
