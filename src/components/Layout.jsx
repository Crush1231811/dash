import { Layout, Menu, Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

const { Header, Content, Footer } = Layout;

const items = [
  { key: '1', label: <Link to="/">首页</Link> },
  { key: '2', label: <Link to="/users">用户管理</Link> },
];

export default function AppLayout() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout className="layout">
      <Header style={{ padding: '0 50px', float: 'left' }}>
        <div className="logo" />
        <Menu 
          mode="horizontal" 
          items={items} 
          theme="light"
          style={{ float: 'left', color: 'white' }} 
        />
        <div style={{ color: 'black', display: 'flex', alignItems: 'center', float: 'right' }}>
          {user?.username}
          <Button type="link" onClick={handleLogout} style={{ color: 'black' }}>
            退出
          </Button>
        </div>
      </Header>
      <Content style={{ padding: '24px 50px', background: 'white', textAlign: 'left' }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>简易后台管理系统 ©2025</Footer>
    </Layout>
  );
}