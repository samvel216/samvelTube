async function fetchVideoById(videoId) {
    const apiKey = "AIzaSyCRJTBUlnM6DtxinjfBQ0FJSBniAM4DmIU"; // Замените на свой ключ API
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
export  {fetchVideoById};