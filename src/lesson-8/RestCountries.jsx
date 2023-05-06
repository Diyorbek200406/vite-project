import "./RestCountries.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import useFetch from "./useFetch";

const RestCountries = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  // loading
  if (loading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }
  //   error
  if (error) {
    return (
      <div>
        <h1>Error : {error}</h1>
      </div>
    );
  }
  // log
  console.log(data);
  return (
    <div>
      RestCountries
      <h1>
        <AiOutlineSearch />
        <RxHamburgerMenu />
      </h1>
    </div>
  );
};

export default RestCountries;
