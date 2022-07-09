module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css')

  eleventyConfig.addNunjucksFilter('limit', (collection, num) => {
    return collection.slice(0, num)
  })
}