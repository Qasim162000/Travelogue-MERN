import { useState } from "react";
import LogContext from "./LogContext";

const LogState = (props) => {
  const host = "https://inotebook-backend-cl91.onrender.com";

  const logInitial = [];

  const [log, setLog] = useState(logInitial);

  const getLog = async () => {
    const response = await fetch(`${host}/api/travellog/fetchlog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setLog(json);
  };

  const addLog = async (title, departure_from, destination, description) => {
    const response = await fetch(`${host}/api/travellog/addlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });

    const newLog = await response.json();
    setLog(log.concat(newLog));
  };

  const editLog = async (
    id,
    title,
    departure_from,
    destination,
    description
  ) => {
    await fetch(`${host}/api/travellog/updatelog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });

    const newLogs = JSON.parse(JSON.stringify(log));
    for (let index = 0; index < newLogs.length; index++) {
      const element = newLogs[index];
      if (element._id === id) {
        newLogs[index].title = title;
        newLogs[index].departure_from = departure_from;
        newLogs[index].destination = destination;
        newLogs[index].description = description;
        break;
      }
    }
    setLog(newLogs);
  };

  const deleteLog = async (id) => {
    await fetch(`${host}/api/travellog/deletelog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newLog = log.filter((log) => {
      return log._id !== id;
    });
    setLog(newLog);
  };

  return (
    <LogContext.Provider
      value={{ log, setLog, addLog, editLog, deleteLog, getLog }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
