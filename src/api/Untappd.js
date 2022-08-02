const venueId = "1612093";
const clientId = "CA6FDAD0735007BF5D7DD5CF88CE50F85E3AB4B9";
const untappdKey = process.env.REACT_APP_UNTAPPD_API_KEY;

const UNTAPPD_URL = "https://api.untappd.com";
const UNTAPPD_CLIENT = `client_id=${clientId}&client_secret=${untappdKey}`;
const CHECKIN_API = `${UNTAPPD_URL}/v4/venue/checkins/${venueId}?${UNTAPPD_CLIENT}&limit=4`;
const BEER_API = (beerId) =>
  `${UNTAPPD_URL}/v4/beer/info/${beerId}?${UNTAPPD_CLIENT}`;

export { CHECKIN_API, BEER_API };
