function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "8e2a8eef2a2611ad082aec2486e70d360433f68ac2f4c6c595103224";
json(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
  console.log(data.ip);
  console.log(data.mac);
  console.log(data.city);
  console.log(data.country_code);
  console.log(data.isp);
  // so many more properties
});

// // Getting the anonymity status from the user's IP
// function get(response) {
//   if (response.threat.is_anonymous) {
//     alert("You are not allowed to create an account.");
//   }
// }

// get(`https://api.ipdata.co?api-key=${apiKey}`, "jsonp");
