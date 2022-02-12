const express = require('express');
const puppeteer = require('puppeteer');

const router = express.Router();

router.post('/apple', function(req, res) {
	let jobSearchInput = req.query;
		(async () => {
			const companyName = "Apple"

			if (jobSearchInput.country.toLowerCase() === "united states of america" || jobSearchInput.country.toLowerCase() === 'usa' || jobSearchInput.country.toLowerCase() === "america") {
                jobSearchInput.country = "United States"
            }

			//Each URL has to be customized to fit each individual website
			const URL = "https://jobs.apple.com/en-us/search?search="
			+ jobSearchInput.jobTitleSearch.split(' ').join("%20")
			+ (jobSearchInput.USstate ? "%20" + jobSearchInput.USstate.split(' ').join("%20") : '' )
			+ (jobSearchInput.city ? "%20" + jobSearchInput.city.split(' ').join("%20") : '' )
			+ "&sort=relevance"
			+ (jobSearchInput.country === "United States" ? '&location=united-states-USA' : '' )

			let results = [companyName, URL, "Results cannot be displayed. Click above to view the search results directly"];
			res.json(results);
		})();
	});

module.exports = router