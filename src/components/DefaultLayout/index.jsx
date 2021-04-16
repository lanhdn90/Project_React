import { Col, Row } from 'antd';
import React,{useState}from 'react';
import { Route } from 'react-router';
import Header from '../layout/Header/Header';
import AdiminSidebar from '../layout/Sidebar/AdiminSidebar';



function DefaultLayout(props) {
    const {exact, path, component: Component, ...other} = props;
    const [isShow, setIsShow] = useState();

    const showSideBar = (val)=>{
        setIsShow(val);
        console.log("🚀 ~ file: index.jsx ~ line 21 ~ showSideBar ~ val", val)
    }
    return (
        <Route
            exact={exact}
            path={path}
            render={(routerProps)=>{
                return(
                    <div>
                        <Header/>
                        <div style={{display: 'flex'}}>
                            <AdiminSidebar
                                showSideBar = {showSideBar}
                            />
                            <Component 
                            {...other}{...routerProps}
                            isShow={isShow}
                            /> 
                        </div>
                    </div>
                )
            }}
        />
    );
}

export default DefaultLayout;