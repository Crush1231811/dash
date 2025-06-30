import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin123') {
      dispatch(login({ username: 'admin', role: 'admin' }));
      navigate('/');
      message.success('登录成功');
    } else if (values.username === 'user' && values.password === 'user123') {
      dispatch(login({ username: 'user', role: 'user' }));
      navigate('/');
      message.success('登录成功');
    } else {
      message.error('登录密码或用户名错误');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;