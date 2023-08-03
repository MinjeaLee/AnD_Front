// src/components/NoticeCreate.js
import React, { useState } from 'react';

const NoticeCreate = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const createNotice = () => {
		// 공지 등록 로직
	};

	return (
		<div>
			<h1>Create Notice</h1>
			<input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
			<textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
			<button onClick={createNotice}>Create</button>
		</div>
	);
};

export default NoticeCreate;
