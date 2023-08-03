// src/components/AdminManagement.js
import React, { useState } from 'react';

const AdminManagement = () => {
	const [adminUsername, setAdminUsername] = useState('');
	const [adminPassword, setAdminPassword] = useState('');

	const createAdmin = () => {
		// 관리자 계정 생성 로직
	};

	return (
		<div>
			<h1>Admin Account Management</h1>
			<input type="text" placeholder="Username" onChange={e => setAdminUsername(e.target.value)} />
			<input type="password" placeholder="Password" onChange={e => setAdminPassword(e.target.value)} />
			<button onClick={createAdmin}>Create Admin</button>
			{/* 관리자 계정 목록 및 수정, 삭제 버튼 등을 여기에 추가하세요 */}
		</div>
	);
};

export default AdminManagement;
