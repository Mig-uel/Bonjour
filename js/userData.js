// Function to get user data from userInfo.js and set it in localStorage.
export let setUserData = (user) => {

  localStorage.setItem('name', user.name);
  localStorage.setItem('zip', user.zip);
  localStorage.setItem('lang', user.lang);
  localStorage.setItem('country', user.country);

};