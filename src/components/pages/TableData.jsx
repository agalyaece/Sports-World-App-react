import axios from "axios";
import { useEffect, useState } from "react";

export default function TableData(){

    const [players, setPlayer] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/players")
        .then(cricket => setPlayer(cricket.data) )
        .catch(err => console.log(err))
    }, [])

    return(
        players.map(player =>{
            return ( <tr  key= {player.runs} >
              <td>{player.player}</td>
              <td>{player.runs}</td>
              <td>{player.wickets}</td>

            </tr>)
            }      
)

);


}