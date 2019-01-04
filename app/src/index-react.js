import React from "react";
var ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById("react")
);

const schools = {
	"181": "Carnegie Mellon University",
	"580": "Massachusetts Institute of Technology",
	"953": "Stanford University",
	"1072": "University of California--Berkeley",
	"12011": "University of Illinois--Urbana-Champaign",
	"298": "Cornell University",
	"1530": "University of Washington",
	"361": "Georgia Institute of Technology",
	"780": "Princeton University",
	"1255": "University of Texas--Austin",
	"148": "California Institute of Technology",
	"1258": "University of Michigan--Ann Arbor",
	"278": "Columbia University",
	"1075": "University of California--Los Angeles",
	"1256": "University of Wisconsin--Madison",
	"399": "Harvard University",
	"1079": "University of California--San Diego",
	"1270": "University of Maryland--College Park",
	"1275": "University of Pennsylvania",
	"783": "Purdue University--West Lafayette",
	"799": "Rice University",
	"1513": "University of Massachusetts--Amherst",
	"1381": "University of Southern California",
	"1222": "Yale University",
	"137": "Brown University",
	"1350": "Duke University",
	"464": "Johns Hopkins University",
	"1232": "University of North Carolina--Chapel Hill",
	"1257": "University of Minnesota--Twin Cities",
	"675": "New York University",
	"709": "Northwestern University",
	"724": "Ohio State University",
	"758": "Pennsylvania State University--University Park",
	"1074": "University of California--Irvine",
	"1111": "University of Chicago",
	"1277": "University of Virginia",
	"825": "Rutgers, The State University of New Jersey--New Brunswick",
	"1073": "University of California--Davis",
	"1077": "University of California--Santa Barbara",
	"971": "Stony Brook University--SUNY"
};
