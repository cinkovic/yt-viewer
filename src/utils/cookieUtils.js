export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
};

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return "";
};

export const trimCookie = (videoLinks) => {
  const MAX_COOKIE_SIZE = 3920;
  let trimmedLinks = [...videoLinks];
  while (encodeURIComponent(JSON.stringify(trimmedLinks)).length > MAX_COOKIE_SIZE) {
    trimmedLinks.pop();
  }
  return trimmedLinks;
}; 