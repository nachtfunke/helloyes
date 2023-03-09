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
					// if a custom override is set, use that
					if (data.permalink) {
						return `/blog/{{ date | dateGetYear }}/${data.permalink}/`;
					} else {
						return `/blog/{{ date | dateGetYear }}/${data.page.fileSlug}/`
					}
				}
				else {
					return false;
				}
			},
			tags: ['blog-post'],
			layout: 'post',
			socialImages: true,
			bodyClass: 'vers--single-post'
		}
	}
}