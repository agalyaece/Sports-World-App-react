/* eslint-disable react/no-unescaped-entities */

import TableData from "./TableData";
import classes from "./TableData.module.css"

export default function Players() {

    

    return (
        <div>
            <table className={classes.players}>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Runs Scores</th>
                        <th>Wickets Taken</th>
                    </tr>
                </thead>
                <tbody>
                    
                   <TableData />

                </tbody>
            </table>
        </div>
    );

}