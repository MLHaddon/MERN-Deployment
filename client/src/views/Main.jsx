import { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = props => {
  const [errors, setErrors] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log("Success! ", res.data);
        setPets(res.data);
      })
      .catch(err => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message)
        }
        setErrors(errArr);
      });
  }, [])


  return (
    <div>
      <header className="App-header d-flex flex-row justify-content-between p-2">
        <div>
          <h1>Pet Shelter</h1>
          <h2>These pets are looking for a good home</h2>
        </div>
        <Link to="/pets/new">Add a pet to the shelter</Link>
      </header>
      <div>
        <table className="table table-bordered col-6 p-2">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            pets.map((p, i) => 
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.type}</td>
                <td><Link 
                  to={`/pets/${p._id}`}
                >Details</Link> | <Link 
                  to={`/pets/${p._id}/edit`}
                >Edit</Link></td>
              </tr>
            )
          }
          {
            errors.map((err, i) => 
              <p key={i}>{err}</p>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Main;