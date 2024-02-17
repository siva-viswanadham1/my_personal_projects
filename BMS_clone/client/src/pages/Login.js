import React from 'react'
import { Button,  Form, } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const onFinish=()=>{
        console.log('user logined')
    }
  return (
    <div className="flex justify-center h-screen items-center bg-my">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome to Book my Shows clone! Please do login
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{required:true,message:'Please input your name'}]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth htmlType="submit" type="primary">
              {" "}
              Login{" "}
            </Button>
            <Link to="/register" className="text-primary">
              {" "}
              don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login