import { useState, useEffect } from "react";
import { Link} from "react-router-dom"
import { retrieveAllRoutines } from "../api/routinesHelpers";
import "../index.css";


const Home = () => {
  const [routines, setRoutines] = useState([]);
  
  useEffect(()=>{
    const routineList = async () => {
      const allRoutines = await retrieveAllRoutines()
      return allRoutines;
    }
    routineList()
      .then((allRoutines) => setRoutines(allRoutines))
      .catch(console.error)
  }, [])

  return (
    <>
      <img src="../public/stock-photo-sportive-men-working-out-with-fitness-balls-1988637098.jpg"></img>
      <div
        style={{
          position: "absolute",
          color: "black",
          top: "420px",
          fontSize: "80px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h1>Your Fitness Tracker</h1>
        {routines && routines.map((routine) =>(
          <div key={routine.id} className="routine-container">
            <h1>{routine.name}</h1>
                        
            <p>{routine.goal}</p>
          </div>
        
        ))}
      </div>
    </>
  );
};

export default Home;