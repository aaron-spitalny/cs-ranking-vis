import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSort, changeYAxis } from "../../redux/actions/dashboardActions";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Barchart from "./Barchart";
import Grid from "@material-ui/core/Grid";

function Dashboard(props) {
	return (
		<div style={{ height: 800, padding: 10 }}>
			<Paper elevation={1}>
				<Grid container>
					<Grid
						style={{ marginLeft: 20, paddingTop: 20 }}
						item
						xl={12}
						lg={12}
						md={12}
						sm={12}
						xs={12}>
						<Grid container>
							<Grid
								item
								xl={3}
								lg={3}
								md={3}
								sm={3}
								xs={3}>
								<InputLabel style={{ paddingRight: 10 }}>
									Sort
								</InputLabel>
								<Select
									onChange={e =>
										props.changeSort(e.target.value)
									}
									value={props.sort}>
									<MenuItem value={"rating"}>
										RMP Rating
									</MenuItem>
									<MenuItem value={"numOfProfessors"}>
										# of Prof.
									</MenuItem>
									<MenuItem value={"numOfRatings"}>
										# of ratings
									</MenuItem>
									<MenuItem value={"ranking"}>
										USNews Ranking
									</MenuItem>
								</Select>
							</Grid>
							<Grid
								item
								xl={3}
								lg={3}
								md={3}
								sm={3}
								xs={3}>
								<InputLabel style={{ paddingRight: 10 }}>
									Y-Axis
								</InputLabel>
								<Select
									onChange={e =>
										props.changeYAxis(e.target.value)
									}
									value={props.yAxis}>
									<MenuItem value={"rating"}>
										RMP Rating
									</MenuItem>
									<MenuItem value={"numOfProfessors"}>
										# of Prof.
									</MenuItem>
									<MenuItem value={"numOfRatings"}>
										# of ratings
									</MenuItem>
									<MenuItem value={"ranking"}>
										USNews Ranking
									</MenuItem>
								</Select>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
						<Barchart />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

const mapStateToProps = state => ({
	sort: state.dashboard.sort,
	yAxis: state.dashboard.yAxis
});

export default connect(mapStateToProps, { changeSort, changeYAxis })(Dashboard);
