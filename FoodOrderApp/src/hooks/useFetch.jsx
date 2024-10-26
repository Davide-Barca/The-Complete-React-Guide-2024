import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        setIsFetching(true);

        const fetchedData = await fetchFn();

        setFetchedData(fetchedData);
        setIsFetching(false);
      } catch (error) {
        setError({
          title: "Failed to fetch!",
          message: error.message,
          status: { code: error.status, text: error.statusText },
        });
        setIsFetching(false);
      }
    }

    fetch();
  }, []);

  return {
    fetchedData,
    isFetching,
    error,
  };
}
