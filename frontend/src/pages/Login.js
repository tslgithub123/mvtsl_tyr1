import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../styles/LoginStyles.css";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/login", values);
            window.location.reload();
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("isAdmin", res.data.isAdmin ? 'admin' : 'user'); // Update isAdmin flag
                message.success("Login Successfull");
                navigate("/");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Something went wrong");
        }
    };

    return (
        <div className="form-container">
            <Form
                className="login-form"
                onFinish={onFinish}
            >
                <h3>Login</h3>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Please enter your email!" },
                        { type: "email", message: "Please enter a valid email address!" }
                    ]}
                >
                    <Input className="email-input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email" />
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please enter your password!" }]}
                >
                    <Input.Password className="password-input" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Enter your password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Login;
