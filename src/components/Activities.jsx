import { useState, useEffect } from "react";
import { getAllActivities } from "../api/activities";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  
  const allActivities = async () => {
  const result = await getAllActivities();
  setActivities(result);
  return result;
  };

  useEffect(() => {
    allActivities();
  }, []);

  return (
    <div id="activity">
      <h1>Activities!</h1>
      {//localStorage.getItem("token") ? (
        // <Button onClick={() => navigate("/activities/create-new-activity")}>
        //   Create New Activity!
        // </Button>
      //) : null
    }
      <div id="grid-wrapper">
        <div id="activity-container">
          {activities.length
            ? activities.map((activity, idx) => {
                return (
                  <div className="allActivities" key={`activity: ${idx}`}>
                    <h1>Activity Name: {activity.name}</h1>
                    <h2>Description: {activity.description}</h2>
                    <p>______________________</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Activities;
