const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

const retrieveAllRoutines = async () =>
{
  const apiURL = `${BASE_URL}/routines`
  
  try {
    const response = await fetch(apiURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
  
}


export { retrieveAllRoutines, };