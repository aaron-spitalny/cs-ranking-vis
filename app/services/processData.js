const fs = require("fs");

async function processData() {
	var schoolData = {};
	await asyncForEach(Object.keys(schools), async school => {
		schoolData[school] = await processSchool(school);
	});
    fs.writeFile(
        `./app/public/data/schoolData.json`,
        JSON.stringify(schoolData),
        function(err) {
            console.log(err);
        }
    );
	//console.log(schoolData);
}

async function processSchool(pos) {
	try {
		let jsonData = require(`../public/data/${schools[pos].id}.json`);
        return {
            id: schools[pos].id,
			name: schools[pos].name,
			rating:
				jsonData.response.docs.reduce(
					(accum, prof) =>
						prof.total_number_of_ratings_i > 0
							? accum + prof.averageratingscore_rf
							: accum,
					0
				) /
				jsonData.response.docs.filter(prof => prof.total_number_of_ratings_i > 0)
					.length,
			numOfRatings: jsonData.response.docs.reduce(
				(accum, prof) =>
					prof.total_number_of_ratings_i > 0
						? accum + prof.total_number_of_ratings_i
						: accum,
				0
			),
			numOfProfessors: jsonData.response.docs.filter(
				prof => prof.total_number_of_ratings_i > 0
			).length
		};
	} catch (err) {
		console.log(err);
	}
}

const schools = {
	"1": { id: "181", name: "Carnegie Mellon University" },
	"2": { id: "580", name: "Massachusetts Institute of Technology" },
	"3": { id: "953", name: "Stanford University" },
	"4": { id: "1072", name: "University of California--Berkeley" },
	"5": { id: "1112", name: "University of Illinois--Urbana-Champaign" },
	"6": { id: "298", name: "Cornell University" },
	"7": { id: "1530", name: "University of Washington" },
	"8": { id: "361", name: "Georgia Institute of Technology" },
	"9": { id: "780", name: "Princeton University" },
	"10": { id: "1255", name: "University of Texas--Austin" },
	"11": { id: "148", name: "California Institute of Technology" },
	"12": { id: "1258", name: "University of Michigan--Ann Arbor" },
	"13": { id: "278", name: "Columbia University" },
	"14": { id: "1075", name: "University of California--Los Angeles" },
	"15": { id: "1256", name: "University of Wisconsin--Madison" },
	"16": { id: "399", name: "Harvard University" },
	"17": { id: "1079", name: "University of California--San Diego" },
	"18": { id: "1270", name: "University of Maryland--College Park" },
	"19": { id: "1275", name: "University of Pennsylvania" },
	"20": { id: "783", name: "Purdue University--West Lafayette" },
	"21": { id: "799", name: "Rice University" },
	"22": { id: "1513", name: "University of Massachusetts--Amherst" },
	"23": { id: "1381", name: "University of Southern California" },
	"24": { id: "1222", name: "Yale University" },
	"25": { id: "137", name: "Brown University" },
	"26": { id: "1350", name: "Duke University" },
	"27": { id: "464", name: "Johns Hopkins University" },
	"28": { id: "1232", name: "University of North Carolina--Chapel Hill" },
	"29": { id: "1257", name: "University of Minnesota--Twin Cities" },
	"30": { id: "675", name: "New York University" },
	"31": { id: "709", name: "Northwestern University" },
	"32": { id: "724", name: "Ohio State University" },
	"33": { id: "758", name: "Pennsylvania State University--University Park" },
	"34": { id: "1074", name: "University of California--Irvine" },
	"35": { id: "1111", name: "University of Chicago" },
	"36": { id: "1277", name: "University of Virginia" },
	"37": {
		id: "825",
		name: "Rutgers, The State University of New Jersey--New Brunswick"
	},
	"38": { id: "1073", name: "University of California--Davis" },
	"39": { id: "1077", name: "University of California--Santa Barbara" },
	"40": { id: "971", name: "Stony Brook University--SUNY" }
};

const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

module.exports = {
	processData
};
