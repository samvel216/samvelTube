function addLinksToText(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex) || [];
  
    let lastIndex = 0;
    const elements = [];
    urls.forEach((url) => {
      const index = text.indexOf(url, lastIndex);
      const before = text.substring(lastIndex, index);
      if (before) {
        elements.push(before);
      }
      elements.push(
        <a key={index} href={url}>
          {url}
        </a>
      );
      lastIndex = index + url.length;
    });
    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }
    return elements;
  }
  export {addLinksToText};