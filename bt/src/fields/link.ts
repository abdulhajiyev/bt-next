import type { Field } from "payload/types";

import deepMerge from "../utilities/deepMerge";

type LinkType = (options?: {
	overrides?: Record<string, unknown>;
}) => Field;

const link: LinkType = ({
	overrides = {},
} = {}) => {
	const linkResult: Field = {
		name: "link",
		type: "group",
		admin: {
			hideGutter: true,
		},
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "type",
						type: "radio",
						options: [
							{
								label: "Tour",
								value: "reference",
							},
							{
								label: "Custom URL",
								value: "custom",
							},
						],
						defaultValue: "reference",
						admin: {
							layout: "horizontal",
							width: "50%",
						},
					},
				],
			},
			{
				name: "image",
				type: "upload",
				relationTo: "media",
				required: true,
			},
		],
	};

	const linkTypes: Field[] = [
		{
			name: "reference",
			label: "Tour to link to",
			type: "relationship",
			relationTo: "tours",
			required: true,
			filterOptions: ({ relationTo, data }) => {
				if (relationTo === "tours") {
					return {
						isHidden: { not_equals: true },
					};
				}
			},
			maxDepth: 1,
			admin: {
				condition: (_, siblingData) => siblingData?.type === "reference",
			},
		},
		{
			name: "url",
			label: "Custom URL",
			type: "text",
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData?.type === "custom",
			},
		},
	];

	linkResult.fields = [...linkResult.fields, ...linkTypes];

	return deepMerge(linkResult, overrides);
};

export default link;
