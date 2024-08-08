import { useCallback, useEffect, useState } from "react";
import { Method } from "axios";
import { RequestParameters } from "../types/request";
import useGlobalRequestStore from "./useGlobalRequestStore";

const useRequest = (
  key: string,
  method: Method,
  url: string,
  params?: RequestParameters,
  autoExecute: boolean = true,
) => {
  const { requests, execute } = useGlobalRequestStore();
  const [shouldExecute, setShouldExecute] = useState(autoExecute);

  useEffect(() => {
    if (shouldExecute) {
      execute(key, { method, url }, params);
      setShouldExecute(false);
    }
  }, [shouldExecute, key, method, url, params, execute]);

  const trigger = useCallback(() => {
    setShouldExecute(true);
  }, []);

  return {
    ...(requests[key] || {
      loading: false,
      data: null,
      error: false,
      errorData: null,
      success: false,
    }),
    trigger,
  };
};

export default useRequest;
