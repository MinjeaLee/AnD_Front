// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// 로그인 로직을 여기에 작성하세요.
	};

	return (
		<div>
			<h1>Login</h1>
			<input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
			<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
