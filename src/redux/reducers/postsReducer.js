import {
	POSTS_FETCH_ALL_LOADED,
	POSTS_FETCH_ALL_LOADING,
	POST_ADD,
	POST_UPDATE,
	POST_LIKE,
	POST_UNLIKE,
	POST_DELETE,
	POST_COMMENT_ADD,
	POST_COMMENT_UPDATE,
	POST_COMMENT_DELETE,
} from "../constants";

const initialState = {
	status: "idle",
	entities: [],
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case POSTS_FETCH_ALL_LOADING: {
			return {
				...state,
				status: "loading",
			};
		}

		case POSTS_FETCH_ALL_LOADED: {
			console.log("POSTS_FETCH_ALL_LOADED");
			return {
				...state,
				status: "idle",
				entities: action.payload,
			};
		}

		case POST_ADD: {
			return {
				...state,
				entities: [...state.entities, action.payload],
			};
		}

		case POST_UPDATE: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		case POST_LIKE: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		case POST_UNLIKE: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		case POST_DELETE: {
			return {
				...state,
				entities: state.entities.filter(
					(one) => one._id !== action.payload._id
				),
			};
		}

		case POST_COMMENT_ADD: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		case POST_COMMENT_UPDATE: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		case POST_COMMENT_DELETE: {
			return {
				...state,
				entities: state.entities.map((one) =>
					one._id === action.payload._id ? action.payload : one
				),
			};
		}

		default:
			return state;
	}
};

export const selectAllPosts = (state) => state.posts.entities;
export const selectPostById = (state, postId) =>
	state.posts.entities.find((post) => post._id === postId);
export const selectCommentsByPostId = (state, postId) =>
	state.posts.entities.find((post) => post._id === postId).comments;
export const selectCommentById = (state, postId, commentId) => {
	const comments = state.posts.entities.find(
		(post) => post._id === postId
	).comments;
	const comment = comments.find((one) => one._id === commentId);
	return comment;
};

export default postsReducer;
