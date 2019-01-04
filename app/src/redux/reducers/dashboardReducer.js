import C from "../constants";
import { initialState } from "../initialState";

//This reducer changes the dashboard object
export const dashboard = (state = initialState.dashboard, action) => {
	switch (action.type) {
		case C.CHANGE_SORT:
			return {
				...state,
				sort: action.payload
			};
		case C.CHANGE_Y_AXIS:
			return {
				...state,
				yAxis: action.payload
			};
		default:
			return state;
	}
};
