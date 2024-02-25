import { GlobalConfig } from "payload/types";
import link from "../fields/link";

export const Carousel: GlobalConfig = {
	slug: "carousel",
	access: {
		read: () => true,
		update: () => true,
	},
	fields: [
		{
			name: "items",
			type: "array",
			fields: [link()],
		},
	],
};
