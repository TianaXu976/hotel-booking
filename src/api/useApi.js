import { useContext, useCallback } from "react";
import { DialogContext, DIALOG } from "../context/dialog";

export default function useApi(apiFunc) {
  const { dialogDispatch } = useContext(DialogContext);

  const getApiResult = useCallback(
    async (...args) => {
      try {
        return await apiFunc(...args);
      } catch (error) {
        dialogDispatch({
          type: DIALOG.ERROR,
          payload: error?.response?.data?.message,
        });
      }
    },
    [apiFunc ,dialogDispatch]
  ) 
  
  return { getApiResult };
}

