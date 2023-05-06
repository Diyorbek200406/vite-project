import useFetch from "./useFetch";

const Movie = () => {
  const { data, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=9fb0a1aac1518937a0a495440a1ef66f"
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
  console.log(data?.results);
  return (
    <div>
      <h1>Movie</h1>
    </div>
  );
};

export default Movie;
