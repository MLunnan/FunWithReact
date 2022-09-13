import React, {useState, useEffect} from 'react';

const Table = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
/*
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")//post
        .then((response) => response.json())
        .then((apiData) => {
            setData(apiData);
            setLoading(false)
        })
    }, [])
    */

    useEffect(() => {
        fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((response) => response.json())
        .then((apiData) => {
            setData(apiData)
            setLoading(false)
        })
        }, [])
    return (
        /*
        <div>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Task</th>
                    <th>Completed?</th>
                </tr>
            
          {data !== undefined &&}
          {loading ? (<div>Loading data...</div>):(
            data
          .filter((item) => item.userId === 4)
          .map((item) => {
            return<tr>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed? "yes" : "no"}</td>
                </tr>
          }))}  
          </table>
        </div>
        */
       <div>
        <h2></h2>
        <ul>
            {loading ? (<div></div>
            ):( 
                data.data.map((item) => {
                return(
                    <li>
                        {item["ID Year"]}:
                        {item.Population}
                    </li>
                )
            }))}
        </ul>
       </div>
    );
    
}

export default Table;
