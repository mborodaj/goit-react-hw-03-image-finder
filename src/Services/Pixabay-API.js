import axios from 'axios';

async function fetchData(query, page) {
  console.log(query);
  let apiKey = '19716290-df87d159eb9c48b6c31409183';

  let url = `?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  axios.defaults.baseURL = 'https://pixabay.com/api/';

  const response = await axios.get(url);
  //   console.log(response);
  const data = await response.data;
  //   //   console.log(data);
  //   const photos = await data.hits;
  //   //   console.log(photos);

  return data;
}

export default fetchData;
