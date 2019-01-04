import C from "../constants";

//This action changes the sort value
export const changeSort = value => dispatch => {
	dispatch({
		type: C.CHANGE_SORT,
		payload: value
	});
};

//This action changes the y axis value
export const changeYAxis = value => dispatch => {
	dispatch({
		type: C.CHANGE_Y_AXIS,
		payload: value
	});
};
