export const request = (resource,query,limit=24) => fetch(`https://api.giphy.com/v1/gifs${resource}?api_key=i6WoSbql0ll5RIC17P243kBWemkCeCIu&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`);