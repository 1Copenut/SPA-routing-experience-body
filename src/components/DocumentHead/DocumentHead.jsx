import { Helmet, HelmetProvider } from 'react-helmet-async';

const DocumentHead = props => {
  const { pageTitle } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="We Say So Corporation knows things" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self'; object-src 'none';" />
      </Helmet>
    </HelmetProvider>
  );
}

export default DocumentHead;
