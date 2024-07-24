const lang = {
  en: {
    'pilih store': 'Select Store',
  },
  id: {
    'pilih store': 'Pilih Toko',
  },
};

export const useTranslation = () => {
  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  console.log(userLocale);
  if (userLocale == 'id') {
    return lang.id;
  }
  return lang.en;
};
