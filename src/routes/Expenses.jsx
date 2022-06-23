import DocumentHead from "../components/DocumentHead/DocumentHead";
import Header from "../components/Header/Header";
import PageStatus from "../components/PageStatus/PageStatus";
import SkipLink from "../components/SkipLink/SkipLink";
import { MAIN_ID } from "../constants";

const Expenses = props => {
  const { pageTitle } = props;

  return (
    <>
      <DocumentHead pageTitle={pageTitle} />
      <PageStatus isFocusable>
        <span>{pageTitle}</span>
      </PageStatus>
      <SkipLink />
      <Header />

      <main className="continuum-global-main" id={MAIN_ID}>
        <h1>Expenses</h1>
        <a href="https://github.com/1Copenut/SPA-routing-experience">GitHub link to verify focus</a>
        <p>Expense listings and definitions for our products</p>
        <h2>Expense definitions</h2>
        <div>
          <h3 id="definition-list-1">Security</h3>
          <dl aria-labelledby="definition-list-1" className="continuum-list--definition">
            <div>
              <dt>SIEM</dt>
              <dd>Security information and event management. We establish lots of high-quality cloud services to keep your network safe. Contact your sales manager for pricing.</dd>
              <dt>Endpoint security</dt>
              <dd>Endpoints might be any terminal, laptop, desktop, or server that your team uses to complete their daily tasks. Contact your sales manager for small, mid, and large-tier licensing fees.</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 id="definition-list-2">Networking</h3>
          <dl aria-labelledby="definition-list-2" className="continuum-list--definition">
            <div>
              <dt>Firewalls</dt>
              <dd>Firewalls define rules that allow or deny data traffic on your network. They can be installed as hardware appliances or software packages. Contact your sales manager for pricing.</dd>
              <dt>PCAP</dt>
              <dd>Packet capture. We can set up network taps or other packet capture for one-off or continuous analysis. Services start at $95/hour for ad hoc analysis.</dd>
            </div>
          </dl>
        </div>
      </main>
    </>
  );
}

export default Expenses;
