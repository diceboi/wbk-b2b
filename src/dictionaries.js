const dictionaries = {
    en: () => import('./locales/en.json').then((module) => module.default),
    de: () => import('./locales/de.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if (!dictionaries[locale]) {
        return dictionaries.en();
    }
    return dictionaries[locale]();
};
