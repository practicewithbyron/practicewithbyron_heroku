import { useEffect, useState } from 'react';
import axios from "axios";


export const FindCatalogItemByEmail = async () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Test').then(response => {
      setData(JSON.parse(response.data.Value));
    }).catch(error => {
      setError(error);
    }).finally(() => {
      setIsFetching(false);
    });
  }, [])

  console.log({ data, isFetching, error });
  return { data, isFetching, error };
}

