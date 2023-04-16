import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';


const AuthorForm = (props) => {
    const navigate= useNavigate();
    const {initialName, message, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    // const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new Product
        onSubmitProp({name});
        // navigate('/');
    }
    return(
        <div className='container'>
            <h1>Favorite Authors</h1>
            <Link to='/'>Home</Link>
            <p className='text-info'>{message}</p>
            <div className="">
                <form onSubmit={onSubmitHandler}>
                    <div className='col my-3'>
                    <label htmlFor="authorname" className='form-label'>Name:</label>
                    <input type='text' value={name} id="authorname" name='authorname' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    { errors.name? <p className='text-danger'>{errors.name.message}</p>:null}
                    </div>
                    <div className='col my-3'>
                    <button type="button" className='btn btn-danger mx-5' onClick={()=>navigate('/') }>Cancel</button>
                    <button type ='submit' className='btn btn-success mx-5'>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default AuthorForm;