import React from 'react';
import {
    Menu,
    Icon
} from 'antd';
import {
    Link
} from 'dva/router';
import {
    connect
} from 'dva';
const SubMenu = Menu.SubMenu;
import styles from './MainLayout.css';



const Header = ({
    dispatch,
    user,
    currentSelect
}) => {

    function handleClick(e) {
        dispatch({
            type: 'topMenu/selectMenu',
            payload: e.key
        })
    }



    return (
        <div>
                <div className={styles.logo}><span className={styles.logoFont}>DashBoard</span></div>
                <Menu
                    onClick={handleClick}
                    selectedKeys={[currentSelect]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />首页</Link>
                    </Menu.Item>
                    <Menu.Item key="projectManager">
                        <Link to="/pm">项目管理</Link>
                    </Menu.Item>
                    <SubMenu title={<span>系统管理</span>}>
                            <Menu.Item key="setting:user">
                                <Link to="/users"><Icon type="user" />用户管理</Link>
                            </Menu.Item>

                    </SubMenu>
                    <SubMenu title={<span><Icon type="github" />欢迎您:{user.username}</span>}
                             className={styles.headerUserInfo}>
                            <Menu.Item key="user:setting"><Icon type="setting"/>设置</Menu.Item>
                            <Menu.Item key="user:logout"><Link to="/logout"><Icon type="logout"/>退出</Link></Menu.Item>


                    </SubMenu>

                </Menu>
            </div>
    )
};

function mapStateToProps(state) {
    const {
        user
    } = state.login;
    const {
        currentSelect
    } = state.topMenu;
    return {
        user,
        currentSelect
    }
}
export default connect(mapStateToProps)(Header);