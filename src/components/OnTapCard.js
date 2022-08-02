import React from "react";

export const OnTapCard = ({ beer }) => {
  const RESIDENT_STATE = "IL";
  return (
    <div key={beer.bid} className="col-md-6 col-xl-4">
      <div className="card mb-4">
        <div className="brewery-image">
          {beer.beer_label_hd && (
            <img src={beer.beer_label_hd} alt="Beer label" />
          )}
          {!beer.beer_label_hd && (
            <div className="placeholder-image">Logo here</div>
          )}
        </div>
        <div className="card-body">
          <span>
            <strong className="mb-2 card-text-primary">
              {beer.brewery.brewery_name}
            </strong>
            &nbsp;
            <i className="d-sm-inline">
              {beer.brewery.location.brewery_city +
                ", " +
                beer.brewery.location.brewery_state}
            </i>
            &nbsp;
            {beer.brewery.location.brewery_state === RESIDENT_STATE && (
              <span className="d-sm-inline badge badge-secondary">Local</span>
            )}
          </span>
          <h3 className="mb-2">
            <span className="beerName">{beer.beer_name}</span>
          </h3>

          <p className="card-text mb-auto">
            {beer.beer_style + " | " + beer.beer_abv + "% ABV"}
          </p>
        </div>
      </div>
    </div>
  );
};
