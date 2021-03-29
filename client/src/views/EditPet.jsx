import PetForm from '../components/PetForm';
import { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: ""
  })

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
      .then(res => setPet(res.data))
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
  }, [props])

  const handleFormSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pets/${props.id}/update`, pet)
      .then(res => {
        if (!res.data.errors) {
          console.log("Success! ", res.data);
          navigate("/");
        } else {
          const errRes = res.data.errors;
          console.log(errRes);
          const errArr = [];
          for (const key of Object.keys(errRes)) {
            errArr.push(errRes[key].message)
          }
          setErrors(errArr);
        }
      })
      .catch(err => {
        const errRes = err.response.data.errors;
        console.log(errRes);
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
export default EditPet;