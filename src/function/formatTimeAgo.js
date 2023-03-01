function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.round(diffMs / 1000);
    const diffMin = Math.round(diffSec / 60);
    const diffHr = Math.round(diffMin / 60);
    const diffDay = Math.round(diffHr / 24);
  
    if (diffSec < 60) {
      return 'только что';
    } else if (diffMin < 60) {
      return `${diffMin} минут назад`;
    } else if (diffHr < 24) {
      return `${diffHr} часов назад`;
    } else {
      return `${diffDay} дней ${diffHr % 24} часов назад`;
    }
  }
  export default formatTimeAgo;
  