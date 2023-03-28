
import axios from '../axios';


export  const checkLogin = async (data) =>{
    const rememberLogin = document.getElementById('remember_Login');
    const response = await axios.post('http://localhost:8000/api/login', {
        data,
       
    })
   
    //if accessToken go to homepage else login again
    const { accessToken, user } = response.data
   
    if(accessToken)
    {
       console.log('accsecc ', accessToken)
       if(rememberLogin.checked){
        localStorage.setItem('status', JSON.stringify(accessToken));
        localStorage.setItem('token', JSON.stringify(user));
       }
       else{
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
       }
     
       window.location.assign('/home');
    }
   
    return accessToken;
    
}

export const checkRegister=async (data) =>
{
    console.log('1',data)
    const response = await axios.post('http://localhost:8000/api/register', {
        data,
       
    })
    console.log('sssss',response.data)
    const { accessToken, user } = response.data
    if(accessToken)
    {
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
        window.location.assign('/home');
    }

    return accessToken;
    
}

export const loginWithGoogle =async (data) =>
{
    console.log('1',data)
    const response = await axios.post('http://localhost:8000/api/loginWithGoogle', {
        data,
       
    })
    console.log('sssss',response.data)
    const { accessToken, user } = response.data
    if(accessToken)
    {
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
        window.location.assign('/home');
    }

    return accessToken;
    
}

export const logOut = () =>{

  
    
    return (
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.assign('/')
    )
}

export  const initActiveFixed = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/initActiveFixed',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const postActiveFixed = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/postActiveFixed',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const initAction = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/initAction',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const postDataAction = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/postDataAction',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const listActionD = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/listActionD',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const assetSum = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/assetSum',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const foreseeSum = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/foreseeSum',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const spendSum = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/spendSum',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const alertPlan = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/alertPlan',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const addAction = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/addAction',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const getAction = async (data) =>{
    const response = await axios.get('http://localhost:8000/api/getAction',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const errorMaxPrice = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/errorMaxPrice',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const chartPlan = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/chartPlan',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const chartPlanAction = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/chartPlanAction',{
        data
    })
    console.log(response.data)
    return response.data;
    
}

export  const chartTypeTable = async (data) =>{
    const response = await axios.post('http://localhost:8000/api/chartTypeTable',{
        data
    })
    console.log(response.data)
    return response.data;
    
}