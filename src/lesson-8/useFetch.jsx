import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        setError(data.status_message + response.status);
      }
      setData(data);
      setLoading(false);
    } catch (error) {
      setError("Error Failed to fetch");
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
