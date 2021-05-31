import { ADD_NAME } from "../actions/type";

const initialState = {
	listName: [],
};

export default function nameReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME: {
			return { ...state, listName: [...state.listName, action.payload] };
		}

		default:
			return state;
	}
}
