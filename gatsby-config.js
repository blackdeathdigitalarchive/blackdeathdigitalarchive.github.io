module.exports = {
  siteMetadata: {
      siteUrl: "https://blackdeatharchive.org",
      title: "Black Death Digital Archive",
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
	  resolve: "gatsby-source-filesystem",
	  options: {
              name: "pages",
              path: "./src/pages/",
	  },
	  __key: "pages",
      },
      {
	  resolve: `gatsby-plugin-mdx`,
	  options: {
              defaultLayouts: {
		  default: require.resolve("./src/components/default-page-layout.js"),
              },
	  },
      },
      
  ],
};
