import React, { useEffect, useState } from 'react'
import Gridwrap from '../grid/Gridwrap'
import Header from '../chat/common/Header'
import { useParams } from 'react-router-dom'

const dummydata = {
    id:1,
    name:"최수빈",
}

function Conversation() {
    const [name,setName] = useState();
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        const getCounselorData=()=>{
            //const response = getCounselorData();
            //setName(response.data);
            //console.log(response.data)
            setName(dummydata);
        }
        getCounselorData();
    },[])
  return (
    <section className='conversation'>
        <div className='header-bg'>
            <Gridwrap>
                <Header link={-1}/>
                <h3 className='name'>{name?.name} 상담사님</h3>
            </Gridwrap>
        </div>
    </section>
  )
}

export default Conversation