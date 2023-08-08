import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { retrieveAllRoutines } from "../api/routinesHelpers";
import "../index.css";

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
      <img src="../stock-photo-sportive-men-working-out-with-fitness-balls-1988637098.jpg"></img>
      <div id="home-title">
        <div>Your Fitness Tracker</div>
        {routines &&
          routines.map((routine) => (
            <div key={routine.id} className="routine-container">
              <h1>{routine.name}</h1>

              <div>Routine Goal:{routine.goal}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
