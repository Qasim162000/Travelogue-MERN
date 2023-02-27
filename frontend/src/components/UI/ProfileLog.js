import React, { useContext } from "react";
import LogContext from "../context/travellog/LogContext";
import LogItem from "./LogItem";
function ProfileLog() {
  const logContext = useContext(LogContext);
  const { log } = logContext;
  return (
    <>
      <h2 className="mt-16 mb-6 text-5xl font-extrabold text-center">
        Your Experiences
      </h2>

      {log.map((logitem) => {
        return <LogItem key={logitem._id} logitem={logitem} />;
      })}
    </>
  );
}

export default ProfileLog;
