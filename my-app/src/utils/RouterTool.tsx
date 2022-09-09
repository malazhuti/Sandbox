/*
    存放一些路由使用的方法 的高阶组件;
*/
import { ComponentType, PropsWithChildren } from "react";
import { useNavigate, useLocation, useParams, Params, NavigateFunction } from "react-router-dom";

interface RouterToll {
  paramsId: Readonly<Params<string>>,
  location:Location,
  naviagte:NavigateFunction
}

function routerTool(Com: ComponentType) {
  return (props: PropsWithChildren<RouterToll>) => {
    const paramsId = useParams(); // 获取动态路由的 ID
    const location = useLocation(); // 获取路由的参数 state
    const navigate = useNavigate(); // 跳转路由使用

    return <Com {...props} {...{paramsId,location,navigate}}></Com>;
  };
}

export default routerTool;
