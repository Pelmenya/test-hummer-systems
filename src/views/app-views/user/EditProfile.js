import React, { useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { useGetUsersQuery } from 'store/api/users';
import { useEffect } from 'react';
import Loading from 'components/shared-components/Loading';
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const EditProfile = ({ userId }) => {
	const navigate = useNavigate();
	const { data } = useGetUsersQuery();
	const [state, setState] = useState(null);

	useEffect(() => {
		if (!state && data) {
			const currentUser = data.find(user => user.id === userId);
			if (currentUser) {
				const { name, email, img, personalInfo } = currentUser;
				setState({
					avatarUrl: img,
					name,
					email,
					userName: name.split(' ')[0],
					phoneNumber: personalInfo.phoneNumber,
					website: personalInfo.site,
					address: personalInfo.location,
				})
	
			}
		}
	}, [data, userId, state]);

	const onFinish = values => {
		const key = 'updatable';
		message.loading({ content: 'Меняемся к лучшему...', key });
		setTimeout(() => {
			setState({
				avatarUrl: values.avatarUrl,
				name: values.name,
				email: values.email,
				userName: values.userName,
				dateOfBirth: values.dateOfBirth,
				phoneNumber: values.phoneNumber,
				website: values.website,
				address: values.address,
				city: values.city,
				postcode: values.postcode,
			})
			message.success({ content: 'Готово, можно кушать!!!', key, duration: 1 });
			navigate(`${APP_PREFIX_PATH}/clients/list`);
		}, 1000);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	if (!state) {
		return <Loading cover='content' align='center'/>
	}

	const { name, email, userName, dateOfBirth, phoneNumber, website, address, city, postcode, avatarUrl } = state;

	return (
		<>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
				<Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{
							'name': name,
							'email': email,
							'username': userName,
							'dateOfBirth': dateOfBirth,
							'phoneNumber': phoneNumber,
							'website': website,
							'address': address,
							'city': city,
							'postcode': postcode,
							'avatarUrl': avatarUrl,
						}
					}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12} className='d-none'>
									<Form.Item
										label="avatarUrl"
										name="avatarUrl"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[{
											required: true,
											type: 'email',
											message: 'Please enter a valid email!'
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Date of Birth"
										name="dateOfBirth"
									>
										<DatePicker className="w-100" />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Phone Number"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Website"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="Address"
										name="address"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="City"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Post code"
										name="postcode"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}


export default EditProfile
