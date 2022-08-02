import React from "react";

export const CheckinCard = ({ checkin }) => {
  const formatDate = (value) => {
    const date = new Date(value);
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "short" });
    return month + " " + day;
  };
  return (
    <div className="col-md-4 col-xl-3">
      <div className="card mb-4">
        {checkin.user.user_avatar && (
          <img src={checkin.user.user_avatar} alt="User avatar" />
        )}
        <div className="untappd-body">
          <div>
            <strong className="mb-2 card-text-primary">
              {checkin.user.first_name + " " + checkin.user.last_name}
            </strong>
            <i>{formatDate(checkin.created_at)}</i>
          </div>
          <div>
            <strong>{checkin.beer.beer_name}</strong>
          </div>

          <p className="card-text mb-auto">{checkin.brewery.brewery_name}</p>
        </div>
      </div>
    </div>
  );
};
