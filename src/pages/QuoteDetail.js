import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const params = useParams();
  return (
    <section>
      <div>QuoteDetail</div>
      <p>{params.quoteId}</p>
      {/*<Route path=`/quotes/{params.quoteId}/comments`>*/}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
}

export default QuoteDetail;
