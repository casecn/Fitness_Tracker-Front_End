const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

/////////////////////////////////////////////////
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("passWord");
  console.log("Purged");
};

/////////////////////////////////////////////////

const registerEndpoint = async (username, passWord) => {
  logout();
  let apiURL = `${BASE_URL}/users/register`;
    
  const body = JSON.stringify({
    "username": username,
    "password": passWord
   });

  try {
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

/////////////////////////////////////////////////
const loginEndpoint = async (username, passWord) => {
  let apiURL = `${BASE_URL}/users/login`;

  const body = JSON.stringify({
    "username": username,
    "password": passWord
   });

  try {
    let token = ""  
    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const result = await response.json();
      
      if (result.message === "you're logged in!") {
        token = result.token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userName", JSON.stringify(username));
      } else {
        window.alert("Login Failed!");
        token = "not logged in";
      }
      return token;
    } catch (error) {
    console.error("LOGIN END POINT ERROR:", error);
  }
};

export { registerEndpoint, logout, loginEndpoint };