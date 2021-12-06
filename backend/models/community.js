/* Community mongoose model */
const mongoose = require('mongoose');

const CommentS = new mongoose.Schema({
	User: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	Description: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
    Date: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
    Time: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	}
})

const PostS = new mongoose.Schema({
	Title: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	User: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	Description: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
    Date: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
    Time: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
    CommunityID: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	PostID: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	Comments: [CommentS]
})

const CommunityS = new mongoose.Schema({
	path: {
		type: String,
		required: true,
		trim: true
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	creator: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
    imageUrl: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
   	members: [
		{
		  type: mongoose.Schema.Types.ObjectId,
		  ref: 'User'
		}
	],

	posts: [PostS]
})

const Community = mongoose.model('Community', CommunityS);
const Post = mongoose.model('Post', PostS);

module.exports = { Post, Community };