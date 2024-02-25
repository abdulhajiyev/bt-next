import { CollectionConfig, GlobalConfig } from "payload/types";

export const Sort: GlobalConfig = {
	slug: "sort",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "sortedTours",
			type: "array",
			// label: "Sorted Tours",

			fields: [
				{
					label: "Tour",
					name: "tour",
					type: "relationship",
					relationTo: "tours",
					// if isHidden is true, don't show it
					required: true,
					filterOptions: ({ relationTo, data }) => {
						if (relationTo === "tours") {
							return {
								isHidden: { not_equals: true },
							};
						}
					},
				},
			],
		},
	],
};
