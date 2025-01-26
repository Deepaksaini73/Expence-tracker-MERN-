import { useState } from 'react';
import GroupForm from './GroupForm';
import './groupInbox.css';

const Inbox =()=>{
    const [groupDetailopen,setGroupDetailopen] = useState(false);
    function toggelegroupform(){
        setGroupDetailopen(!groupDetailopen);
    }
    return (
        <>
        { groupDetailopen && (
            <GroupForm/>
        )}

        <div className="add-group" onClick={toggelegroupform}>{groupDetailopen ? 'x' : '+'} </div>
        </>
    )
}

export default Inbox;