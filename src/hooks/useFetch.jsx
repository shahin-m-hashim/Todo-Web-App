import { getTodos } from "../backend/todo";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [fetchId, setFetchId] = useState(Date.now());

  const [res, setResponse] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    // console.log("fetch Id: ", fetchId);
    const fetchData = async () => {
      try {
        const response = await getTodos();
        setResponse({ data: response.data, error: null, isLoading: false });
      } catch (error) {
        setResponse({ data: null, error: error.message, isLoading: false });
      }
    };

    fetchData();
  }, [fetchId]);

  const reFetch = () => setFetchId(Date.now());

  return { res, reFetch };
};

export default useFetch;
