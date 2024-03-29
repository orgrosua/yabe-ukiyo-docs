import languages from '../src/i18n/languages';
import { TranslationStatusBuilder } from './lib/translation-status/builder';

const translationStatusBuilder = new TranslationStatusBuilder({
	pageSourceDir: './src/content/docs',
	htmlOutputFilePath: './dist/translation-status/index.html',
	sourceLanguage: 'en',
	targetLanguages: Object.keys(languages)
		.filter((lang) => lang !== 'en')
		.sort(),
	languageLabels: languages,
	githubRepo: process.env.GITHUB_REPOSITORY || 'orgrosua/yabe-ukiyo-docs',
	githubToken: process.env.GITHUB_TOKEN,
});

await translationStatusBuilder.run();
