// src/components/TeamManagement.js
import React, { useState } from 'react';

const TeamManagement = () => {
	const [teamName, setTeamName] = useState('');

	const createTeam = () => {
		// 팀 생성 로직
	};

	return (
		<div>
			<h1>Create Team</h1>
			<input type="text" placeholder="Team Name" onChange={e => setTeamName(e.target.value)} />
			<button onClick={createTeam}>Create</button>
		</div>
	);
};

export default TeamManagement;
