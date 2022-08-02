import React, { useState, useEffect } from "react";
import { CheckinCard } from "./CheckinCard";
import { CHECKIN_API } from "../api/Untappd";

export const Checkins = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    getCheckins();
  }, []);

  const getCheckins = async () => {
    await fetch(CHECKIN_API)
      .then((response) => response.json())
      .then((json) => setApiResponse(json.response));
  };

  return (
    <>
      <h2>Untappd Checkins</h2>

      <div className="row mb-2">
        {apiResponse &&
          apiResponse.checkins.items.map((checkIn) => (
            <CheckinCard key={checkIn.checkin_id} checkin={checkIn} />
          ))}
      </div>
    </>
  );
};
