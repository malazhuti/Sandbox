import {useNavigate} from "react-router-dom";
function HocRequire(Com:any) {
  return (props:any) => {
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate();
    if (token) <Com {...props}></Com>
    else navigate('/login')
  }
}

export default HocRequire