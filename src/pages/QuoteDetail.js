import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun !" },
  { id: "q2", author: "Rania", text: "Learning React is great !" },
];
function QuoteDetail() {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) return <p>No quote found!</p>;
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/*<Route path=`/quotes/{params.quoteId}/comments`>*/}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
}

export default QuoteDetail;
