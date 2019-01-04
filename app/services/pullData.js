var axios = require("axios");
const fs = require("fs");

function pullData() {
	asyncForEach(Object.keys(schools), async school => {
		let num = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
        await sleep(num)
		axios
			.get(
				`http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=200&callback=noCB&q=*%3A*+AND+schoolid_s%3A${school}+AND+teacherdepartment_s%3A%22Computer+Science%22&defType=edismax&qf=teacherfirstname_t%5E2000+teacherlastname_t%5E2000+teacherfullname_t%5E2000+autosuggest&bf=pow(total_number_of_ratings_i%2C2.1)&sort=total_number_of_ratings_i+desc&siteName=rmp&start=0&fl=pk_id+teacherfirstname_t+teacherlastname_t+total_number_of_ratings_i+averageratingscore_rf+schoolid_s`
			)
			.then(function(response) {
				fs.writeFile(
					`./app/data/${school}.json`,
					response.data.substr(5, response.data.length - 7),
					function(err) {
						console.log(err);
					}
				);
			})
			.catch(function(error) {
				console.log(error);
			});
	});
}

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

const schools = {
	"181": "Carnegie Mellon University",
	"580": "Massachusetts Institute of Technology",
	"953": "Stanford University",
	"1072": "University of California--Berkeley",
	"1112": "University of Illinois--Urbana-Champaign",
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

const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

module.exports = {
	pullData
};
