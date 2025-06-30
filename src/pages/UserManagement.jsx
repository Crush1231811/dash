// src/pages/UserManagement.jsx
import { Table, Button, Space, Input, Modal } from 'antd'
import { useState } from 'react'
import UserForm from '../components/UserForm'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser, deleteUser } from '../store/userSlice'

const UserManagement = () => {
  const [searchText, setSearchText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const { users } = useSelector((state) => state.users)
  const { user: currentAuthUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const columns = [
    { title: 'ID', dataIndex: 'id', sorter: (a, b) => a.id - b.id },
    { title: '用户名', dataIndex: 'username' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '角色', dataIndex: 'role' },
    { title: '状态', dataIndex: 'status' },
    {
      title: '操作',
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)} disabled={currentAuthUser.role !== 'admin'}>编辑</Button>
          <Button danger onClick={() => handleDelete(record.id)} disabled={currentAuthUser.role !== 'admin'}>删除</Button>
        </Space>
      ),
    },
  ]

  const filteredData = users.filter(item =>
    item.username.includes(searchText) || item.email.includes(searchText)
  )

  const handleAdd = () => {
    setCurrentUser(null)
    setIsModalOpen(true)
  }

  const handleEdit = (user) => {
    setCurrentUser(user)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  const handleSubmit = (values) => {
    if (currentUser) {
      dispatch(updateUser({ ...values, id: currentUser.id }))
    } else {
      dispatch(addUser(values))
    }
    setIsModalOpen(false)
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input.Search 
          placeholder="搜索用户" 
          onSearch={setSearchText}
          style={{ width: 300 }}
        />
        {currentAuthUser.role === 'admin' && (
          <Button type="primary" onClick={handleAdd} style={{ float: 'right' }}>
            新增用户
          </Button>
        )}
      </div>
      
      <Table 
        columns={columns} 
        dataSource={filteredData} 
        rowKey="id"
        pagination={{ pageSize: 5 }} 
      />
      
      <Modal
        title={currentUser ? "编辑用户" : "新增用户"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <UserForm 
          initialValues={currentUser} 
          onSubmit={handleSubmit} 
        />
      </Modal>
    </div>
  )
}

export default UserManagement