/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Getting Started', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Introduction', slug: 'introduction', key: 'introduction' },
	{ text: 'Installation', slug: 'install', key: 'install' },

	{ text: 'License System', header: true, type: 'learn', key: 'licenseSystem' },
	{ text: 'License', slug: 'license/license', key: 'license/license' },
	{ text: 'Remote', slug: 'license/remote', key: 'license/remote' },

	{ text: 'E-commerce', header: true, type: 'learn', key: 'e-commerce' },
	{ text: 'WooCommerce', slug: 'e-commerce/woocommerce', key: 'e-commerce/woocommerce' },
	{ text: 'Easy Digital Downloads', slug: 'e-commerce/easy-digital-downloads', key: 'e-commerce/easy-digital-downloads' },

] as const;
