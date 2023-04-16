import React, {useState, useEffect, } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AuthorList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (AuthorList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    // const {removeFromDOM, Author, setAuthor} = props;
    const [authorList, setAuthorList] = useState([]);
    const navigate = useNavigate();
    const deleteAuthor = (AuthorId) => {
        axios.delete('http://localhost:8000/api/Author/' + AuthorId)
            .then(res => {console.log(res);
                setAuthorList(authorList.filter(authorList => authorList._id != AuthorId));
            })
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/author")
    	.then((res)=>{
	    console.log(res.data);
            setAuthorList(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div className = "container">
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>Add an author</Link>
            <table className='table'>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                <tbody>
                {authorList.map((author,index) => 
                <tr key={index}><td>{author.name}</td>
                <td><button type='button' className="btn btn-primary mx-3"onClick={()=> navigate(`/edit/${author._id}`)}>Edit</button>
                <button type="button" className="btn btn-danger mx-3" onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
                </tr> )}
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;

