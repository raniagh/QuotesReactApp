import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun !" },
  { id: "q2", author: "Rania", text: "Learning React is great !" },
];
function QuoteDetail() {
  /*it's like useLocation 
  but give us more informations for the current URL
  it's useful when we change our routes in APP.js we don't have to adjust all other nested routes
  */
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) return <p>No quote found!</p>;
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
