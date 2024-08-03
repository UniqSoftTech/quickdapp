import React, { createContext, ReactNode, useContext, useReducer } from "react";

export interface IApiContextRequestType {
  url: string;
  model?: string;
  token?: string;
  body?: { [key: string]: any };
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

interface IApiType {
  [key: string]: any;
  fetchRequest: (params: IApiContextRequestType) => Promise<any>;
}

const ACTION = { REQ: "req", RES: "res" };

const dataReducer = (state: any, action: any) => {
  switch (action?.type) {
    case ACTION.REQ:
      return { ...state, [`is${action.model}`]: true };

    case ACTION.RES:
      return {
        ...state,
        [`is${action.model}`]: false,
        [`res${action.model}`]: action?.data || null,
      };
    default:
      return state;
  }
};

export const ApiContext = createContext<IApiType | undefined>(undefined);

interface ApiProviderProps {
  children: ReactNode;
}

const initinalState = {};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [state, dispatch]: any = useReducer(dataReducer, initinalState);

  const fetchRequest = async ({
    url,
    body,
    model,
    token,
    method = "GET",
  }: IApiContextRequestType): Promise<any> => {
    const modelKey = model || url;

    try {
      dispatch({ model: modelKey, type: ACTION.REQ });

      const response = await fetch("http://localhost:3001/api" + url, {
        method: method,
        mode: "cors",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            token || state.resaccesstoken || localStorage.getItem("token"),
          "Access-Control-Allow-Origin": "*",
        }),
      }).catch((err) => {
        return err;
      });

      if (!response.ok) {
        dispatch({ model: modelKey, data: response, type: ACTION.RES });
        return await response.json();
      }

      const json = await response.json();
      dispatch({ model: modelKey, data: json?.data, type: ACTION.RES });

      return json;
    } catch (error) {
      throw error;
    }
  };

  return (
    <ApiContext.Provider
      children={children}
      value={{ ...state, fetchRequest }}
    />
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
