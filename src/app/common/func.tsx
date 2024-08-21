export const getPublishedAtVideo = (isoDate = "2024-08-19T06:00:00Z") => {
    const givenDate = new Date(isoDate).getTime();
    const today = new Date().getTime();
    const timespane = today - givenDate;

    if (timespane / (1000 * 60 * 60 * 24 * 365) > 1) {
      const value = Math.floor(
        (today - givenDate) / (1000 * 60 * 60 * 24 * 365)
      );
      return `${value > 1 ? value +" years ago" : value + " year ago"}`;
    }
    if (timespane / (1000 * 60 * 60 * 24 * 30) > 1) {
      const value = Math.floor(
        (today - givenDate) / (1000 * 60 * 60 * 24 * 30)
      );
      return `${value > 1 ? value +" months ago" : value + " month ago"}`;
    }
    if (timespane / (1000 * 60 * 60 * 24 * 7) > 1) {
      const value = Math.floor((today - givenDate) / (1000 * 60 * 60 * 24 * 7));
      return `${value > 1 ? value +" weeks ago" : value + " week ago"}`;
    }
    if (timespane / (1000 * 60 * 60 * 24) > 1) {
      const value = Math.floor((today - givenDate) / (1000 * 60 * 60 * 24));
      return `${value > 1 ? value +" days ago" : value + " day ago"}`;
    }
    if (timespane / (1000 * 60 * 60) > 1) {
      const value = Math.floor((today - givenDate) / (1000 * 60 * 60));
      return `${value > 1 ? value +" hours ago" : value + " hour ago"}`;
    }
    if (timespane / (1000 * 60) > 1) {
      const value = Math.floor((today - givenDate) / (1000 * 60));
      return `${value > 1 ? value +" minutes ago" : value + " minute ago"}`;
    }
    return `now`;
  };