import React, { useState, useEffect } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import { useGetUsersQuery } from 'store/api/users';
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const UserList = () => {
	const navigate = useNavigate();

	const [users, setUsers] = useState(null);
	const [userProfileIsVisible, setUserProfileIsVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const { data } = useGetUsersQuery();

	useEffect(() => {
		if (!users) {
			setUsers(data);
		}
	}, [data, users]);


	const deleteUser = (userId) => {
		setUsers(users.filter(item => item.id !== userId));
		message.success({ content: `Удален пользователь ${userId}`, duration: 2 });
	}

	const showUserProfile = (userInfo) => {
		setUserProfileIsVisible(true);
		setSelectedUser(userInfo);
	};

	const closeUserProfile = () => {
		setUserProfileIsVisible(false);
		setSelectedUser(null);
	}

	const tableColumns = [
		{
			title: 'Пользователь',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Роль',
			dataIndex: 'role',
			sorter: {
				compare: (a, b) => a.role.length - b.role.length,
			},
		},
		{
			title: 'Последний визит',
			dataIndex: 'lastOnline',
			render: date => (
				<span>{dayjs.unix(date).format("MM/DD/YYYY")} </span>
			),
			sorter: (a, b) => dayjs(a.lastOnline).unix() - dayjs(b.lastOnline).unix()
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			render: status => (
				<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
			),
			sorter: {
				compare: (a, b) => a.status.length - b.status.length,
			},
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right d-flex justify-content-end">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={(e) => { showUserProfile(elm); e.stopPropagation() }} size="small" />
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={(e) => { deleteUser(elm.id); e.stopPropagation() }} size="small" />
					</Tooltip>
				</div>
			)
		}
	];

	if (users) {
		return (
			<Card bodyStyle={{ 'padding': '0px' }}>
				<div className="table-responsive">
					<Table className='cursor-pointer' columns={tableColumns} dataSource={users} rowKey='id' onRow={(record) => {
						return {
							onClick: (e) => { navigate(`${APP_PREFIX_PATH}/user/${record.id}`) }, // click row
						};
					}} />
				</div>
				<UserView data={selectedUser} visible={userProfileIsVisible} close={() => { closeUserProfile() }} />
			</Card>
		)
	}

	return <Loading cover='content' align='center' />

};

export default UserList
