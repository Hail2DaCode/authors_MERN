import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from './AuthorForm';

const EditAuthor = (props) => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                // setTitle(res.data.Title);
                // setPrice(res.data.Price);
                // setDescription(res.data.Description);
                console.log(res.data);
                setAuthor(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])
    const updateAuthor = (authorParam) => {
        axios.put('http://localhost:8000/api/author/' + id, authorParam)
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => {console.log(err); (setErrors(err.response.data.errors));} )
    }
    return( <div>
        {loaded && <AuthorForm onSubmitProp = {updateAuthor} initialName = {author.name} message="Edit this author" errors={errors}/>}
    </div>
    )
}
export default EditAuthor;