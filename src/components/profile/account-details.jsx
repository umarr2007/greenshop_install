import { Button, Form, Input, Space, Upload } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import MainButton from "../button/button";

function AccountDetails() {
  return (
    <>
      <h2 className="text-[16px] leading-[16px] font-[500] text-[#3D3D3D] mb-[20px]">
        Personal Information
      </h2>
      <Form
        name="layout-multiple-horizontal"
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        className="gap-[30px] grid grid-cols-1 sm:grid-cols-2 "
      >
        <Form.Item
          layout="vertical"
          label="First Name"
          name="first name"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Last Name"
          name="last name"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Email address"
          name="email"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Phone Number"
          name="phone"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Space.Compact className="w-full">
            <Input style={{ width: "15%" }} defaultValue="+998" />
            <Input style={{ width: "85%" }} defaultValue="26888888" />
          </Space.Compact>
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Username"
          name="username"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Profile photo"
          name="profile photo"
          rules={[{ required: true }]}
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 24 }}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <button className="text-start">
          <MainButton>Save Changes</MainButton>
        </button>
      </Form>
    </>
  );
}
export default AccountDetails;
