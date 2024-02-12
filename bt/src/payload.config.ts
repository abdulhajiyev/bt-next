import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import { Tours } from "./collections/Tours";
import { Media } from "./collections/Media";

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	serverURL: process.env.PAYLOAD_SERVER,
	cors: ["http://localhost:3000", "https://cms.bookand.travel"].filter(Boolean),
	csrf: ["http://localhost:3001", "http://localhost:3000", "https://cms.bookand.travel"],
	editor: slateEditor({}),
	collections: [
		Users,
		Tours,
		// Media,
		{
			slug: "media",
			access: {
				create: () => true,
				read: () => true,
				update: () => true,
				delete: () => true,
			},
			fields: [
				{
					name: "alt",
					type: "text",
				},
			],
			upload: true,
		},
	],
	routes: {
		api: '/api',
		admin: '/admin',
		graphQL: '/graphql',
		graphQLPlayground: '/graphql-playground',
	},
	upload: {
		limits: {
			fileSize: 20000000, // 5MB, written in bytes
		},
	},
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [payloadCloud()],
	localization: {
		locales: [
			{
				label: {
					en: "English",
					az: "İngilis",
					ru: "Английский",
				},
				code: "en",
			},
			{
				label: {
					en: "Azerbaijani",
					az: "Azərbaycanca",
					ru: "Азербайджанский",
				},
				code: "az",
			},
			{
				label: {
					en: "Russian",
					az: "Rusca",
					ru: "Русский",
				},
				code: "ru",
			},
		],
		defaultLocale: "az",
		fallback: true,
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
});
