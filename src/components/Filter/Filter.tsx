import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { changeStatus, StatusType } from "../../features/filter/filterSlice";

export default function Filter() {
  const filter = useSelector((state: RootState) => state.filter.status);
  const dispatch = useDispatch();

  const handleChangeStatus = (status: StatusType) => {
    dispatch(changeStatus(status));
  };

  return (
    <div>
      <button
        disabled={filter === "all"}
        onClick={() => handleChangeStatus("all")}
      >
        All
      </button>
      <button
        disabled={filter === "doing"}
        onClick={() => handleChangeStatus("doing")}
      >
        Doing
      </button>
      <button
        disabled={filter === "done"}
        onClick={() => handleChangeStatus("done")}
      >
        Done
      </button>
    </div>
  );
}
