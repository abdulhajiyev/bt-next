import { CollectionConfig } from "payload/types";
import {
	lexicalEditor,
	HTMLConverterFeature,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { slateEditor } from "@payloadcms/richtext-slate";
import { SlugField } from "@nouance/payload-better-fields-plugin";

export const Tours: CollectionConfig = {
	slug: "tours",
	access: {
		create: () => true,
		read: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			label: "Tour name",
			type: "text",
			localized: true,
			required: true,
		},
		...SlugField(
			{
				name: "slug",
				admin: {
					position: "sidebar",
				},
			},
			{
				useFields: ["title"],
			},
		),
		{
			name: "location",
			label: "Location",
			type: "text",
			localized: true,
			required: true,
		},
		{
			name: "tourImages",
			label: "Tour Images",
			required: true,
			type: "array",
			minRows: 4,
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
		},
		// is domestic or international
		{
			name: "isDomestic",
			label: "Is Domestic",
			type: "checkbox",
		},
		{
			name: "tourInfo",
			label: "Tour Info",
			type: "richText",
			localized: true,
			required: true,
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					// The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.
					HTMLConverterFeature({}),
				],
			}),
		},
		lexicalHTML("tourInfo", {
			name: "tourInfo_html",
		}),
		{
			name: "price",
			label: "Price",
			type: "array",
			required: true,
			fields: [
				{
					name: "value",
					label: "Price",
					type: "number",
					required: true,
				},
				{
					name: "description",
					label: "Description",
					type: "text",
					localized: true,
					required: true,
				},
			],
		},
		{
			name: "includedInPrice",
			label: "Included in price",
			// required: true,
			type: "array",
			fields: [
				{
					name: "incPrice",
					label: "Included in price",
					type: "text",
					localized: true,
					required: true,
				},
			],
		},
		{
			name: "includedInTour",
			label: "Included in tour",
			// required: true,
			type: "array",
			fields: [
				{
					name: "incTour",
					label: "Included in tour",
					type: "text",
					localized: true,
					required: true,
				},
			],
		},
	],
};
