import React, { Component } from "react";
var axios = require("axios");
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryLabel,
	VictoryTooltip
} from "victory";
import schoolData from "../../../public/data/schoolData.json";

class Barchart extends Component {
	render() {
		const DATA = Object.keys(schoolData).map(key => {
			return {
				label: `${schoolData[key].name}
				 		Rating: ${schoolData[key].rating.toFixed(2)}
						# of Ratings: ${schoolData[key].numOfRatings}
						# of Prof. Rated: ${schoolData[key].numOfProfessors}
						USNews Rating: ${key}`,
				ranking: Number(key),
				...schoolData[key]
			};
		});
		DATA.sort(
			(a, b) =>
				a[this.props.sort] > b[this.props.sort]
					? 1
					: b[this.props.sort] > a[this.props.sort]
						? -1
						: 0
		);
		return (
			<VictoryChart
				width={1000}
				height={700}
				animate={{
					duration: 2000,
					onLoad: { duration: 1000 }
				}}
				padding={{
					top: 40,
					bottom: 300,
					left: 50,
					right: 20
				}}
				domainPadding={{ y: 40, x: 20 }}
				theme={VictoryTheme.material}>
				<VictoryAxis
					tickLabelComponent={
						
						<VictoryLabel textAnchor={"start"} angle={90} dy={-6} style={{ fontSize: 11 }} />
					}
				/>
				<VictoryAxis dependentAxis />
				<VictoryBar
					events={[
						{
							target: "data",
							eventHandlers: {
								onMouseOver: () => {
									return [
										{
											target: "data",
											mutation: () => ({
												style: {
													fill: "#688796",
													width: 20
												}
											})
										},
										{
											target: "labels",
											mutation: () => ({ active: true })
										}
									];
								},
								onMouseOut: () => {
									return [
										{
											target: "data",
											mutation: () => {}
										},
										{
											target: "labels",
											mutation: () => ({ active: false })
										}
									];
								}
							}
						}
					]}
					labelComponent={<VictoryTooltip />}
					data={DATA}
					x="name"
					y={this.props.yAxis}
				/>
			</VictoryChart>
		);
	}
}

const mapStateToProps = state => ({
	sort: state.dashboard.sort,
	yAxis: state.dashboard.yAxis
});

export default connect(mapStateToProps)(Barchart);
