import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	access: {
		create: () => true,
		read: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		// Email added by default
		// Add more fields as needed
	],
};

export default Users;
