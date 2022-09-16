import React, { useEffect, useState } from 'react'
import MemberService from 'service/MemberService';

const MemberList = () => {
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
        <div className='m-4 p-2 border w-600'>
            <table className='w-600'>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>성명</th>
                  <th>휴대번호</th>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
              { members.map((member)=>(
                <tr key={member.id} className="">
                  <td className='w-1/10'>{member.id}</td>
                  <td className='w-2/10'>{member.mname}</td>
                  <td className='w-3/10'>{member.mphone}</td>
                  <td className='w-4/10'>{member.maddress}</td>
                </tr>
              ))}
              </tbody>

            </table>
            


        </div>
    </div>
  )
}

export default MemberList