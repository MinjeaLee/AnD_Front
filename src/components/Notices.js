// src/components/Notices.js
import React, { useEffect, useState } from 'react';

const Notices = () => {
	const [notices, setNotices] = useState([]);

	useEffect(() => {
		// 서버에서 공지사항을 가져옵니다.
		// 예를 들어, fetch('/api/notices').then(...)
	}, []);

	return (
		<div>
			<h1>Notices</h1>
			{notices.map((notice, index) => (
				<div key={index}>
					<h3>{notice.title}</h3>
					<p>{notice.content}</p>
				</div>
			))}
		</div>
	);
};

export default Notices;
