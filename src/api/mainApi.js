const cache = {};

function displayPopularVideos(maxResults) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&snippet&key=${"AIzaSyCRJTBUlnM6DtxinjfBQ0FJSBniAM4DmIU"}`;

  if (cache[apiUrl] && cache[apiUrl].expiry > Date.now()) {
    return Promise.resolve(cache[apiUrl].data);
  }

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const videoIds = data.items.map((item) => item.id);
      console.log(videoIds)
      return videoIds;
    })
    .catch((error) => {
      console.error(error);
    });
}

export { displayPopularVideos };



  
//   const cache = {};

// function displayPopularVideos(maxResults) {
//   const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&key=${"AIzaSyCRJTBUlnM6DtxinjfBQ0FJSBniAM4DmIU"}`;

//   if (cache[apiUrl] && cache[apiUrl].expiry > Date.now()) {
//     return Promise.resolve(cache[apiUrl].data);
//   }

//   return fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const ids = data.items.map((item) => item.id);
//       console.log(item)
//       cache[apiUrl] = {
//         data: ids,
//         expiry: Date.now() + 300000, // 5 minutes
//       };
//       return ids;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// export { displayPopularVideos };

//   // Использование функции             
  


//   "AIzaSyCRJTBUlnM6DtxinjfBQ0FJSBniAM4DmIU"

  
  
  
  