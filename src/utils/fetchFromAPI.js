import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL ,
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '464c74b765msh6cf40da00fdf9c7p1afafbjsn8502bcdac8f2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }