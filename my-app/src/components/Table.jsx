import React, {useState, useEffect} from 'react';

const Table = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((apiData) => setData(apiData))
    }, [])
    return (
        <div>
          {data !== undefined && data.map((item) => {
            return<li>{item.userId}:{item.title}</li>
          })}  
        </div>
    );
}

export default Table;
