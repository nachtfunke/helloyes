module.exports = collection => collection.getFilteredByTag('blog-post').sort( (a,b) => a.data.date - b.data.date);