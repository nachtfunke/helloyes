require('dotenv').config();

const isDevEnv = process.env.ENV === 'development';
const todaysDate = new Date();

function showDraft(data) {
	const isDraft = 'draft' in data && data.draft !== false;
	const isFutureDate = data.page.date > todaysDate;
	return isDevEnv || (!isDraft && !isFutureDate);
}

module.exports = function() {
	return {
		eleventyComputed: {
			eleventyExcludeFromCollections: function(data) {
				if(showDraft(data)) {
					return data.eleventyExcludeFromCollections;
				}
				else {
					return true;
				}
			},
			permalink: function(data) {
				if(showDraft(data)) {
					return 'blog/{{ date | dateGetYear }}/{{ title | slug }}/'
				}
				else {
					return false;
				}
			},
            tags: 'post',
            layout: 'post'
		}
	}
}