import { useCallback, useEffect, useState } from "react";

async function sendHTTPRequest(url, config) {
  const request = await fetch(url, config);

  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.message || "Error");
  }

  return response;
}

export function useHTTP(url, config, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHTTPRequest(url, { ...config, body: data });
        console.log(resData)
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
