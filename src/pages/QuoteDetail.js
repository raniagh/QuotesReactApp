import React from "react";
import { useParams } from "react-router-dom";

function QuoteDetail() {
  const params = useParams;
  return (
    <section>
      <div>QuoteDetail</div>
      <p>{params.quoteId}</p>
    </section>
  );
}

export default QuoteDetail;
