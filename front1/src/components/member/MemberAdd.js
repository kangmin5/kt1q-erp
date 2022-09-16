import React from 'react'

const MemberAdd = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='my-6'>
            <h1 className='text-lg font-bold '> 회원등록 </h1>
        </div>
        <div>
            <form className="w-full max-w-lg border py-6 px-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-name">
                            성명
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="* 성명"/>
                        <p className="text-gray-500 text-sm italic ">*는 반드시 입력하세요.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-phone">
                            휴대번호
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="* 010-0000-0000"/>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600 text-md italic mb-1 ">자택 주소</p>

                </div>
                <div className="flex flex-wrap -mx-3 mb-2 border">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-si">
                            시
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-si">
                                <option>서울특별시</option>
                                <option>경기도 광명시</option>
                                <option>부산광역시</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-state">
                            군/구
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gu">
                                <option>서초구</option>
                                <option>강남구</option>
                                <option>영등포구</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-zip">
                            우편번호
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                    </div>
                    <div className="w-full px-3">
                        <div >
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-address">
                                상세 주소
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="종로 1번지 124"/>
                        <p className="text-gray-600 text-sm italic"> 우편물을 받을 주소를 입력하세요.</p>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default MemberAdd