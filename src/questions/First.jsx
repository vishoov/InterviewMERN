import React from 'react'
import { useEffect, useState } from 'react'

const First = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [display, setDisplay] = useState([]);
    const [loading, setLoading] = useState(true);  
    async function fetchData(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const fetched = await response.json();
            setData(fetched);
            setDisplay(fetched.slice(0,5));

            setLoading(false);
        }
        catch(err){
            alert(err.message)
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    useEffect(()=>{
        setDisplay(data.slice((page-1)*5, page*5))
    }, [page])

    const filterName = (e)=>{
        e.preventDefault();
        const value = e.target.value; //user input
        const filtered = data.filter((user)=> user.name.toLowerCase().includes(value.toLowerCase()));
        setDisplay(filtered.slice(0,5));
        setPage(1);

    }

  return (
    <div>
        <h1>Interview Question #1</h1>
    <p>Build a paginated table that fetches user data from an API (you can use https://jsonplaceholder.typicode.com/users).

Display the user data in a table with columns for name, email, and phone.

Show 5 users per page and include "Next" and "Previous" buttons to navigate pages.

Show a loading indicator while data is being fetched.

Display an error message if the API call fails.

(Bonus) Allow filtering users by name with a search input.</p>

<input onChange={filterName} type='text' placeholder='Search by name' />

        {loading? <h2>Loading....</h2> : (
    <table border={1} style={{margin:"auto"}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>

        </thead>
        <tbody>
            {
                display.map((user)=>{
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )}
    <div>
        <button
        onClick={()=>setPage(page-1)}
        disabled={page===1}
        >Previous</button>
        <span>Page :{page}</span>
        <button
        onClick={()=>setPage(page+1)}
        >Next</button>
    </div>

    </div>
  )
}

export default First


//0, 5 -> page = 1, users=5 
//6, 10, page = 2 -> (page-1)*users+1, page*ysers -> 5, 10
//11, 15 -> page =3 , 10, 15