import { Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import DeletePet from "../components/DeletePet";

const ViewPet = props => {
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
      .then(res => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch(err => {
        const errRes = err.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message)
        }
        setErrors(errArr);
      })
  }, [props])

  return (
    <div>
      <header className="App-header d-flex flex-row justify-content-between p-2">
        <div>
          <h1>Pet Shelter</h1>
          <h2>{pet.name}'s Details</h2>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-around">
          <Link to="/">Back to Home</Link>
          <DeletePet 
            id={props.id}
            name={pet.name}
          />
        </div>
      </header>
      {
        errors.length > 0 ?
        errors.map((err, i) => 
          <p key={i}>{err}</p>
        ) :
        <div className="border-black p-2">
          <p>Pet Type: {pet.type}</p>
          <p>Description: {pet.desc}</p>
          {
            pet.skillOne ? <p>Skill One: {pet.skillOne}</p> : ""
          }
          {
            pet.skillTwo ? <p>Skill Two: {pet.skillTwo}</p> : ""
          }
          {
            pet.skillThree ? <p>Skill Three: {pet.skillThree}</p> : ""
          }
        </div>
      }
    </div>
  )
}
export default ViewPet;