import { Link } from '@reach/router';
const PetForm = ({inputs, errors, handleSubmit, handleChange}) => {
  return (
      <form className="p-2 w-100" onSubmit={handleSubmit}>
            {
              errors ? 
              errors.map((val, idx) => <p key={idx}>{val}</p>) 
              : ""
            }
            <div className="d-flex flex-row justify-content-around">
              <div className="p-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="name"
                      onChange={handleChange} 
                      placeholder={inputs.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="type"
                      onChange={handleChange} 
                      placeholder={inputs.type}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="desc"
                      onChange={handleChange}
                      placeholder={inputs.desc}
                    />
                </div>
              </div>
              <div className="p-2">
                <div className="form-group">
                    <label htmlFor="skillOne">Skill 1</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="skillOne"
                      onChange={handleChange}
                      placeholder={inputs.skillOne}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skillTwo">Skill 2</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="skillTwo"
                      onChange={handleChange}
                      placeholder={inputs.skillTwo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skillThree">Skill 3</label>
                    <div></div>
                    <input 
                      type="form-control" 
                      name="skillThree"
                      onChange={handleChange}
                      placeholder={inputs.skillThree}
                    />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success"/>
              <Link to="/"><button className="btn btn-dark">Cancel</button></Link>
            </div>
      </form>
  )
}
export default PetForm;