const { REACT_APP_GIPHY_API_KEY } = process.env;
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs";

export const TRENDING_URL = `${GIPHY_API_URL}/trending?api_key=${REACT_APP_GIPHY_API_KEY}&limit=20`;
export const SEARCH_URL = `${GIPHY_API_URL}/search?api_key=${REACT_APP_GIPHY_API_KEY}&limit=20`;
export const AUTOCOMPLETE_URL = `${GIPHY_API_URL}/search/tags?api_key=${REACT_APP_GIPHY_API_KEY}&limit=5`;
