import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { GlobalState, initialState, RequestParameters } from "../types/request";
import api from "@/hooks/api";
import { Method } from "axios";

type GlobalStateCreator = StateCreator<GlobalState>;

const store: GlobalStateCreator = (set, get) => ({
  requests: {},

  execute: (
    key: string,
    config: { method: Method; url: string },
    parameters: RequestParameters = {},
  ) => {
    const { data, params, force, onSuccess, onError, onFinal } = parameters;
    const { requests } = get();
    const existingRequest = requests[key] || initialState;

    if (!force && config.method === "GET" && existingRequest.data) {
      return;
    }

    if (existingRequest.loading) {
      return;
    }

    set((state) => ({
      requests: {
        ...state.requests,
        [key]: { ...initialState, loading: true },
      },
    }));

    api({
      method: config.method,
      url: config.url,
      data,
      params,
    })
      .then((res) => {
        set((state) => ({
          requests: {
            ...state.requests,
            [key]: { ...initialState, success: true, data: res.data },
          },
        }));
        onSuccess?.(res);
      })
      .catch((err) => {
        set((state) => ({
          requests: {
            ...state.requests,
            [key]: { ...initialState, error: true, errorData: err },
          },
        }));
        onError?.(err);
      })
      .finally(() => {
        onFinal?.();
      });
  },
});

const useGlobalRequestStore = create<GlobalState>()(
  devtools(store, { name: "GlobalRequestStore" }),
);

export default useGlobalRequestStore;
