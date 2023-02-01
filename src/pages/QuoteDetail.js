import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  /*it's like useLocation 
  but give us more informations for the current URL
  it's useful when we change our routes in APP.js we don't have to adjust all other nested routes
  */
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) return <p>No quote found!</p>;

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* Using Route to define in wich URL a content should be appear*/}
      <Route path={match.path} exact>
        <div className="centered">
          {/*use the Nested route */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            load Comments
          </Link>
        </div>
      </Route>
      {/*<Route path=`/quotes/{params.quoteId}/comments`>
        Define a Nested Route*/}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}

export default QuoteDetail;
