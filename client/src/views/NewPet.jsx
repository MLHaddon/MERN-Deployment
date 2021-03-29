import PetForm from '../components/PetForm';
import { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPet = props => {
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: ""
  })

  const handleFormSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pets/new", pet)
      .then(res => {
        console.log("Success! ", res.data);
        navigate("/");
      })
      .catch(err => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message)
        }
        setErrors(errArr);
      })
  }

  const handleInputChange = e => {
    setPet({
      ...pet,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <header className="App-header d-flex flex-row justify-content-between p-2">
        <div>
          <h1>Pet Shelter</h1>
          <h2>Know a pet in need of a home?</h2>
        </div>
        <Link to="/">Back to Home</Link>
      </header>
      <div>
        <PetForm 
          inputs={pet}
          errors={errors}
          handleChange={handleInputChange}
          handleSubmit={handleFormSubmit}
        />
      </div>
    </div>
  )
}
export default NewPet;