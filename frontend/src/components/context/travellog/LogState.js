import { useState } from "react";
import LogContext from "./LogContext";

const LogState = (props) => {
  const host = "http://localhost:5000"

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
      title: "Trip to Pindi",
      departure_from: "ISB",
      destination: "UK",
      description:
        "Was Goood and had fun with family and friends, came across a polar bear tho, but still he was family too so it was all an amazing experience",
      date: "2023-02-27T14:44:14.482Z",
      __v: 0,
    },
  ];

  const [log, setLog] = useState(logInitial);

  const addLog = async (title, departure_from, destination, description) => {
    const response = await fetch(`${host}/api/travellog/addlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "ADD AUTH TOKEN HERE"
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });
    const json = response.json();
    console.log(json)
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

  const editLog = async (id, title, departure_from, destination, description) => {
    const response = await fetch(`${host}/api/travellog/updatelog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "ADD AUTH TOKEN HERE"
      },
      body: JSON.stringify({ title, departure_from, destination, description }),
    });
    const json = response.json();
    console.log(json)
    for (let index = 0; index < log.length; index++) {
      const element = log[index];
      if (element._id === id) {
        element.title = title;
        element.departure_from = departure_from;
        element.destination = destination;
        element.description = description;
      }
    }
  }

  const deleteLog = async (id) => {
    const response = await fetch(`${host}/api/travellog/deletelog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "ADD AUTH TOKEN HERE"
      },
    });
    const json = response.json()
    console.log(json)
    const newLog = log.filter((elem) => {
      return elem._id !== id
    })
    setLog(newLog);
  };


  return (
    <LogContext.Provider value={{ log, setLog, addLog, editLog, deleteLog }}>
      {props.children}
    </LogContext.Provider>
  )
}

export default LogState;
