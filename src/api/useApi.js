import { useContext, useCallback } from "react";
import { DialogContext, DIALOG } from "../context/dialog";

export default function useApi(apiFunc) {
  const { dialogDispatch } = useContext(DialogContext);

  console.log("useApi");

  const getApiResult = useCallback(
    async (...args) => {
      try {
        console.log("getApiResult");
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

// bookingRoom(roomId, bookingData)
// .then((response) => {
//   dialogDispatch({
//     type: DIALOG.SUCCESS,
//     payload: response.data.booking
//   });

// })
// .catch((error) =>{
//   dialogDispatch({
//     type: DIALOG.ERROR,
//     payload: error.response.data.message,
//   })}
// );
