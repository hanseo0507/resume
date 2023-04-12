import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `이력서 - 이한수`,
		siteUrl: `https://hansu.im`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-tsconfig-paths",
		"gatsby-plugin-emotion",
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: ["G-522BRW2WVG"],
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/src/pages`,
				ignore: ["**/styled.ts"],
			},
		},
	],
};

export default config;
