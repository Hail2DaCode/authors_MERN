import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useNavigate  } from 'react-router-dom';

const NewAuthor = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/author', authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')

            })
            .catch((err)=>{console.log(err); return (setErrors(err.response.data.errors));})
    }
    return(
        <AuthorForm onSubmitProp = {createAuthor} initialName = "" message = "Add a new author" errors={errors}/>
    )
}
export default NewAuthor;