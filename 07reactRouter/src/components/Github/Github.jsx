import React, { useEffect, useState } from 'react'


function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Udbhav1202').then(response => response.json() ).then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
    return (
        <div>GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="" width={300} />
        </div>
    )
}

export default Github


