const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

/////////////////////////////////////////////////
export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("passWord");
  console.log("Purged");
};

/////////////////////////////////////////////////

export const registerEndpoint = async (username, passWord) => {
  logOut();
  let apiURL = `${BASE_URL}/users/register`;
  console.log(apiURL);
  
  const body = JSON.stringify({
    "username": username,
    "password": passWord
   });

  try {
    //const response = await fetch(`${BASE_URL}/users/register`, {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

    const result = await response.json();
    const token = result.token;
    if (result.message === "you're signed up!") {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("username", JSON.stringify(username));
    } else {
      window.alert(`Registration Failed! - - ${ result.error}`);
    }
    return true;
  } catch (err) {
    console.error(err);
  }
};
