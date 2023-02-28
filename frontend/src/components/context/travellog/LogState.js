import { useState } from "react";
import LogContext from "./LogContext";

const LogState = (props) => {
  const host = "http://localhost:5000";

  const logInitial = [];

  const [log, setLog] = useState(logInitial);

  const getLog = async () => {
    const response = await fetch(`${host}/api/travellog/fetchlog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMGM1Y2E3ZTIxNGQxNWRjMTA3NDZlIn0sImlhdCI6MTY3NjgwOTI1MX0.PDQLSCNYkk8YxzjsYpETqr2Ox-t64i1m4dciRfIzobI",
      },
    });

    const json = await response.json();
    // console.log(json);
    setLog(json);
  };

  const addLog = async (title, departure_from, destination, description) => {
    const response = await fetch(`${host}/api/travellog/addlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMGM1Y2E3ZTIxNGQxNWRjMTA3NDZlIn0sImlhdCI6MTY3NjgwOTI1MX0.PDQLSCNYkk8YxzjsYpETqr2Ox-t64i1m4dciRfIzobI",
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });
    const json = response.json();
    console.log(json);
    const newLog = {
      _id: "63fcc1be0962asdasdsa34dc96d8231e7d5",
      user: "63f0c5ca7e214d15dc10746e",
      title: title,
      departure_from: departure_from,
      destination: destination,
      description: description,
      date: "2023-02-27T14:44:14.482Z",
      __v: 0,
    };
    setLog(log.concat(newLog));
  };

  const editLog = async (
    id,
    title,
    departure_from,
    destination,
    description
  ) => {
    const response = await fetch(`${host}/api/travellog/updatelog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMGM1Y2E3ZTIxNGQxNWRjMTA3NDZlIn0sImlhdCI6MTY3NjgwOTI1MX0.PDQLSCNYkk8YxzjsYpETqr2Ox-t64i1m4dciRfIzobI",
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });
    const json = response.json();
    console.log(json);
    for (let index = 0; index < log.length; index++) {
      const element = log[index];
      if (element._id === id) {
        element.title = title;
        element.departure_from = departure_from;
        element.destination = destination;
        element.description = description;
      }
    }
  };

  const deleteLog = async (id) => {
    await fetch(`${host}/api/travellog/deletelog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMGM1Y2E3ZTIxNGQxNWRjMTA3NDZlIn0sImlhdCI6MTY3NjgwOTI1MX0.PDQLSCNYkk8YxzjsYpETqr2Ox-t64i1m4dciRfIzobI",
      },
    });
    const newLog = log.filter((elem) => {
      return elem._id !== id;
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
