import React, { useState, useEffect } from "react";
import { BEER_API } from "../api/Untappd";
import { OnTapCard } from "./OnTapCard";

export const OnTap = () => {
  const [beers, setBeers] = useState([]);

  // Hard-code list of beer IDs for now. When viewing a beer on Untappd, the
  // beer ID is the last string in the URL, such as 1672929 in the following:
  // https://untappd.com/b/triptych-brewing-dank-meme/1672929
  const DANK_MEME = 1672929;
  const EXTENDED_JAM = 2476943;
  const WAINBOWS = 2514499;
  const CITRA_SPACE_CRYSTALS = 3158129;
  const SIERRA_PALE = 6284;
  const SUMPIN = 25796;

  useEffect(() => {
    const beerIds = [
      DANK_MEME,
      EXTENDED_JAM,
      WAINBOWS,
      CITRA_SPACE_CRYSTALS,
      SIERRA_PALE,
      SUMPIN,
    ];

    beerIds.map((beerId) => getBeerInfo(beerId));
  }, []);

  const getBeerInfo = (beerId) => {
    fetch(BEER_API(beerId))
      .then((response) => response.json())
      .then((json) => {
        setBeers((beers) => [...beers, json.response]);
      });
  };

  return (
    <div className="row mb-2">
      {beers && beers.map(({ beer }) => <OnTapCard beer={beer} />)}
    </div>
  );
};
