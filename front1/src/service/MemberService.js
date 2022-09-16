import axios from "axios";

const MEMBER_BASE_REST_API_URL = 'http://localhost:8080/member';

class MemberService{
    getAllMembers(){
        return axios.get(MEMBER_BASE_REST_API_URL)
    }
}

export default new MemberService();