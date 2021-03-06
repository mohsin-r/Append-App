import React, { useState, useEffect } from 'react';
import FriendPreview from '../components/FriendPreview';
import { getAllUsers } from '../hooks/Api';

export default function Friends() {
	const [friends, setFriends] = useState(null);

	useEffect(() => {
		getAllUsers().then(user => {
			setFriends(user);
		})

		// Friends need to be fetched from backend
		// setFriends([
		// 	{
		// 		name: 'Alex D',
		// 		username: 'AlexDobbin'
		// 	},
		// 	{
		// 		name: 'Joshua Lee',
		// 		username: 'Marvin'
		// 	},
		// 	{
		// 		name: 'Kirill',
		// 		username: 'KirillTregubov',
		// 		imageUrl: 'users/kirill.png'
		// 	},
		// 	{
		// 		name: 'Mohsin',
		// 		username: 'SmokeTrails'
		// 	},
		// 	{
		// 		name: 'Rehan',
		// 		username: 'TheRayman786'
		// 	}
		// ]);
	}, []);

	return (
		<div>
			<h1 className="heading">User Directory</h1>
			<div>
				{friends && friends.map((friend, index) =>
					<div key={index}>
						<FriendPreview name={friend.name} username={friend.username} imageUrl={friend.imageUrl} />
					</div>
				)}
			</div>
		</div>
	);
}
