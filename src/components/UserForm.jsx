import { Form, Input, Select, Button } from 'antd'
const { Option } = Select
const UserForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    onSubmit(values)
    form.resetFields()
  }
  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱格式不正确' }
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="role"
        label="角色"
        rules={[{ required: true, message: '请选择角色' }]}
      >
        <Select>
          <Option value="admin">管理员</Option>
          <Option value="user">普通用户</Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        name="status"
        label="状态"
        rules={[{ required: true, message: '请选择状态' }]}
      >
        <Select>
          <Option value="激活">激活</Option>
          <Option value="禁用">禁用</Option>
        </Select>
      </Form.Item>
      
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form>
  )
}
export default UserForm