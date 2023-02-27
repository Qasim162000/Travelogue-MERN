import { useState } from "react";
import LogContext from "./LogContext";

const LogState = (props) => {
  const logInitial = [
    {
      _id: "63fcc1be096dc96d8234231e7d5",
      user: "63f0c5ca7e214d15dc10746e",
      title: "Trip to UK",
      departure_from: "ISB",
      destination: "UK",
      description:
        "Was Goood and had fun with family and friends, came across a polar bear tho, but still he was family too so it was all an amazing experience",
      date: "2023-02-27T14:44:14.482Z",
      __v: 0,
    },
    {
      _id: "63fcc1be096dc9624d8231e7d5",
      user: "63f0c5ca7e214d15dc10746e",
      title: "Trip to UK",
      departure_from: "ISB",
      destination: "UK",
      description:
        "Was Goood and had fun with family and friends, came across a polar bear tho, but still he was family too so it was all an amazing experience",
      date: "2023-02-27T14:44:14.482Z",
      __v: 0,
    },
  ];

  const [log, setLog] = useState(logInitial);

  const addLog = (title, departure_from, destination, description) => {
    const newlog = {
      _id: "63fcc1be096234dc96d8231e7d5",
      user: "63f0c5ca7e214d15dc10746e",
      title: "Trip to UK Added",
      departure_from: "ISB Added",
      destination: "UK Added",
      description:
        "Was Goood and had fun with family and friends, came across a polar bear tho, but still he was family too so it was all an amazing experience Added",
      date: "2023-02-27T14:44:14.482Z",
      __v: 0,
    };
    setLog(log.concat(newlog));
  };
  const editLog = () => {};
  const deleteLog = () => {};

  return (
    <LogContext.Provider value={{ log, setLog, addLog, editLog, deleteLog }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
