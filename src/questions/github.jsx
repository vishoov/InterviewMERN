import React from 'react'
import { useState } from 'react'
const github = () => {
    const [data, setData] = useState(null);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const searchUser = async () =>{
        try{
            setLoading(true)
            setData(null)
        const res = await fetch(`https://api.github.com/users/${value}`
            , {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );

        if(!res){
            throw new Error("no response")
        }

        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false)
        }
        catch(err){
            alert(err.message)
        }
    }
  return (
    <div>
        <h1>{value}</h1>
        <input onChange={(e)=>setValue(e.target.value)} value={value} />
        <button onClick={searchUser}>Search</button>

        {
            loading && ( <h1>Loading...</h1>)
        }

        { data && (
            <div style={{border:'1px solid black', width:'300px', margin:'auto', marginTop:'20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img style={{width:'100px', height:'100px', borderRadius:'50%'}} src={data.avatar_url} alt={data.name} />
                <h2>{data.name}</h2>
                <p>Followers: {data.followers}</p>
                <p>Public Repos: {data.public_repos}</p>
                </div>
        )}
    </div>
  )
}

export default github