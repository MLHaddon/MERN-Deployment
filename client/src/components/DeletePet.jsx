import { navigate } from '@reach/router';
import axios from 'axios';
import { useState } from 'react';

const DeletePet = ({name, id, successCallback}) => {

  const [errors, setErrors] = useState([]);

  const handleClick = e => {
    axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
      .then(res => {
        console.log(res.data);
        navigate("/");
      })
      .catch(err => {
        const errRes = err.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message)
        }
        setErrors(errArr);
      })
  }

  return (
    <>
      <button className="btn btn-danger" onClick={handleClick}>Adopt {name}</button>
      {
        errors.map((err, i) => 
          <p key={i}>{err}</p>
        )
      }
    </>
  )
}
export default DeletePet;