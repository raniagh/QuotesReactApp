import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  //Change the browser history
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    //history.push() : we can go back to previous page
    //history.replace(): we can't go back
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
