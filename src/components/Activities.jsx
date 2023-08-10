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
      {
        //localStorage.getItem("token") ? (
        // <Button onClick={() => navigate("/activities/create-new-activity")}>
        //   Create New Activity!
        // </Button>
        //) : null
      }
      <div className="flex flex-col items-center justify-center mx-auto space-y-3">
        
          {activities.length
            ? activities.map((activity, idx) => {
                return (
                  <div
                    className=" border  shadow w-8/12 border-solid rounded-lg"
                    key={idx}
                  >
                   <div className="text-sm"><u>Activity Name:</u> {activity.name}</div>
                    <div className="text-xs">Description: {activity.description}</div>
                  </div>
                );
              })
            : null}
        </div>
      
    </div>
  );
};

export default Activities;
