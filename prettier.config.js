/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro'
			}
		}
	]
}
