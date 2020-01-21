import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <>
      <Head>
        <title>Zuzka Jeschke - zuzj.es</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-45 container">
        <MainHeader>Zuzka Jeschke</MainHeader>
        <div className="section">
          <a href="https://t.me/zuzjes">Telegram</a>
          <br />
          <a href="/references" className="buttonLike">
            Reference
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .section {
            padding-top: 1.5rem;
          }
          .w-45 {
            max-width: 45%;
          }
          .padd-5 {
            padding: 5px;
          }
          .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            font-family: "Cutive Mono", monospace;
            max-width: 800px;
          }
          h1 {
            font-size: 3em;
          }
          p,
          a {
            font-size: 1.2rem;
          }
          a {
            color: grey;
          }
          .buttonLike {
            border: 1px pink solid;
            padding: ;
          }
          .quote {
            border-left: solid 2px grey;
            padding-left: 1rem;
          }
          ::selection {
            background: #b5ebde; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #b5ebde; /* Gecko Browsers */
          }
        `}
      </style>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
