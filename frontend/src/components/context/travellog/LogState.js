import { useState } from "react";
import LogContext from "./LogContext";

const LogState = (props) => {
  const logInitial = [
    {
      _id: "63fca5efcf1d2e3b69272acd",
      user: "63f0c5ca7e214d15dc10746e",
      title: "Trip to Baku",
      departure_from: "ISB",
      destination: "Malaysia",
      descripton: "2023-02-27T12:45:35.681Z",
      date: "2023-02-27T12:45:35.681Z",
      __v: 0,
    },
    {
      _id: "63fca605cf1d2e3b69272ad0",
      user: "63f0c5ca7e214d15dc10746e",
      title: "Trip to Pindi",
      departure_from: "Malay",
      destination: "Isb",
      descripton: "2023-02-27T12:45:57.483Z",
      date: "2023-02-27T12:45:57.483Z",
      __v: 0,
    },
  ];

  const [log, setLog] = useState(logInitial);

  return (
    <LogContext.Provider value={{ log, setLog }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
