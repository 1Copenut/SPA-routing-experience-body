import DocumentHead from "../components/DocumentHead/DocumentHead";
import PageLiveRegion from "../components/PageLiveRegion/PageLiveRegion";
import Header from "../components/Header/Header";
import { MAIN_ID } from "../constants";

const Home = props => {
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
        <h1>Home</h1>
        <a href="https://github.com/1Copenut/SPA-routing-experience">GitHub link to verify focus</a>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <h2>Market share</h2>
        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
      </main>
    </>
  );
}

export default Home;
