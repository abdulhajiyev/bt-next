// locales/en.ts
export default {
	hero: "Discover your new trip",
	herodesc:
		"Embark on unforgettable journeys: Your passport to adventure awaits! Discover the world with B&T - Where every destination is a story and every experience is a memory. Let your wanderlust take flight!",
	navigation: {
		home: "Home",
		tours: {
			label: "Tours",
			abroad: "Tours abroad",
			inCountry: "Tours in Azerbaijan",
			all: "All tours",
		},
		services: "Services",
		about: {
			label: "About",
			us: "About B&T",
			contact: "Contact us",
		},
		menu: "Menu",
	},
	tours: {
		default: {
      bron: "Book",
      price: "Price",
			night: "Night",
			breakfast: "Breakfast",
			transfer: "Transfer",
			guide: "Guide service",
			includedInTour: "Included in the program",
			includedInPrice: "Included in the price",
		},
		abroad: {
			doha: {
				name: "Doha",
				description:
					"We present to you the Doha tour that will warm your soul on cold winter days!",
			},
		},
		domestic: {
			qabala: {
				name: "Gabala",
				description: "2 Days 1 Night Gabala-Baku-Gabala tour (by train)",
				location: "Gabala, Azerbaijan",
				day: "Day",
				day1_1: "Meeting at Demirliu station",
				day1_2: "Travel from Baku to Gabala",
				day1_3: "Arrival in Gabala",
				day1_4: "Leaving Gabala train station and checking into a hotel",
				day1_5: "Checking into the hotel",
				day1_6: "After registration, free time",
				day2_1: "Breakfast and free time",
				day2_2: "Return to Gabala train station",
				day2_3: "Departure from Gabala train station",
				day2_4: "Registration and accommodation",
				day2_5: "Gabala - Baku",
				inc1: "Round trip ticket for the selected class between Baku and Gabala",
				inc2: "Transfer from Gabala Train Station to the hotel and back",
				inc3: "One night's stay at the hotel",
				inc4: "One meal at the hotel",
				price1: "Price per person for one room",
				price2: "Price per person for two rooms",
				price3: "Price per person for three rooms",
			},
		},
	},
	footer: {
		termsAndPolicies: {
			label: "Terms and Policies",
			privacyPolicy: "Privacy Policy",
			termsOfUse: "Terms of Use",
			accessibility: "Accessibility",
			rewardSystemPolicy: "Reward System Policy",
		},
		help: {
			label: "Help",
			support: "Support",
			cancelBookings: "Cancel Your Bookings",
			useCoupon: "Use Coupon",
			refundPolicies: "Refund Policies",
			internationalTravelDocuments: "International Travel Documents",
		},
		contact: {
			label: "Contact us",
			contact: "Contact",
			address: "Address",
			phone: "Phone",
			email: "Email",
			socials: "Socials",
			fullName: "Full name",
			emailAddress: "Email address",
			message: "Message",
			send: "Send Message",
		},
	},
} as const;
