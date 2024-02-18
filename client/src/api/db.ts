import axios from "axios";

interface userSignInData {
  name: string;
  email: string;
  password: string;
}

interface userLogInData {
    email: string;
    password: string;   
}


export default class mongoAPI {
  baseURL = "http://localhost:8080";

  constructor() {
    this.baseURL = this.baseURL;
  }

  userSignIn = async (userData: userSignInData) => {
    const { name, email, password } = userData;
    try {
      const res = await axios.post(`${this.baseURL}/signup`, {
        name,
        email,
        password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  userLogOut = async () => {
    try {
      const res = await axios.get(`${this.baseURL}/logout`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  userLogIn = async (userData : userLogInData) => {
    try{
      const res = await axios.post(`${this.baseURL}/login`, userData);
      return res.data;
    }catch(error){
      console.log(error);
    }
  }

}
