import React, { useEffect,useState } from 'react'
import MemberService from 'service/MemberService';
import MemberList from './MemberList';


const Member = () => {
    const [members,setMembers] = useState([]);
    
    useEffect(() => {
      MemberService.getAllMembers().then((response)=>{
        setMembers(response.data)
        console.log(response.data);
      }).catch(error =>{
        console.log(error)
      })
    }, [])
    

  return (
    <div>
        <div className='mt-8'>
            <h3>회원 관리</h3>
            <button>회원리스트</button>
            <div>

                <MemberList members={dummyMembers}/>
                {/* <table className='border w-full mt-4' >
                    <thead>
                        <tr>

                            <th className='w-2/10'>{transformedMembers.name}</th>
                            <th className='w-3/10'>휴대번호</th>
                            <th className='w-6/10'>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    </div>
  )
}

export default Member