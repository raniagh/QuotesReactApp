import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  //Give us the access to an object(history) that allows us to change & manage the URL
  const history = useHistory();
  //Has informationS about the current loaded page , URL(pathname,..)
  const location = useLocation();
  //search is a location prop that contain query parameters
  //Translate ?sort=asc as a ke/value object
  const queryParams = new URLSearchParams(location.search);
  //get the value of sort key
  const isSortingAscending = queryParams.get("sort") === "asc";
  //sort quotes
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    //change the URL page
    //add query parameters (sort)
    //push URL AS an object
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    /* or push URL as a string
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );*/
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
