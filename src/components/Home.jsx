import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { retrieveAllRoutines } from "../api/routinesHelpers";
//import "../index.css";

const Home = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const routineList = async () => {
      const allRoutines = await retrieveAllRoutines();
      return allRoutines;
    };
    routineList()
      .then((allRoutines) => setRoutines(allRoutines))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div >
          <img
            className="h-auto max-w-lg mx-auto"
            src="../stock-photo-sportive-men-working-out-with-fitness-balls-1988637098.jpg"
          ></img>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto space-y-3">
          {routines &&
            routines.map((routine) => (
              <div key={routine.id} className=" border  shadow w-8/12 border-solid rounded-lg">
                <div className="text-sm font-semibold">{routine.name}</div>

                <div className="text-xs">Goal:{routine.goal}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
