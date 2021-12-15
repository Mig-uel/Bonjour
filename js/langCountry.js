let selection = () => {
  // Language Object
  let languageObj = {
    'ar': 'Arabic',
    'de': 'German',
    'el': 'Greek',
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'he': 'Hebrew',
    'hi': 'Hindi',
    'it': 'Italian',
    'ja': 'Japanese',
    'ml': 'Malayalam',
    'mr': 'Marathi',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'pt': 'Portuguese',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sv': 'Swedish',
    'ta': 'Tamil',
    'te': 'Telugu',
    'uk': 'Ukrainian',
    'zh': 'Chinese'
  };

  // Country Object
  let countryObj = {
    'au': 'Australia',
    'br': 'Brazil',
    'ca': 'Canada',
    'ch': 'Switzerland',
    'cn': 'China',
    'de': 'Germany',
    'eg': 'Egypt',
    'es': 'Spain',
    'fr': 'France',
    'gb': 'United Kingdom',
    'gr': 'Greece',
    'hk': 'Hong Kong',
    'ie': 'Ireland',
    'il': 'Israel',
    'in': 'India',
    'it': 'Italy',
    'jp': 'Japan',
    'nl': 'Netherlands',
    'no': 'Norway',
    'pe': 'Peru',
    'ph': 'Philippines',
    'pk': 'Pakistan',
    'pt': 'Portugal',
    'ro': 'Romania',
    'ru': 'Russia',
    'se': 'Sweden',
    'sg': 'Singapore',
    'tw': 'Taiwan',
    'ua': 'Ukraine',
    'us': 'United States'
  };

  // Language/Country Selection Container
  let languageCountryContainer = document.createElement('div');
  languageCountryContainer.className = 'language-country-container';

  // Language Selection Setup
  let languageSelection = document.createElement('select');
  languageSelection.id = 'language';
  languageSelection.className = 'form-select';

  let languageOptionNode = document.createElement('option');
  languageOptionNode.innerHTML = 'Language';
  languageOptionNode.selected = true;
  languageOptionNode.disabled = true;

  languageSelection.appendChild(languageOptionNode);

  let langSize = Object.keys(languageObj).length;
  let langKeys = Object.keys(languageObj);
  let langValues = Object.values(languageObj);

  for (let i = 0; i < langSize; i++) {
    let newOptionNode = document.createElement('option');
    newOptionNode.value = langKeys[i];
    newOptionNode.innerHTML = langValues[i];

    languageSelection.appendChild(newOptionNode);
  }

  // Country Selection Setup
  let countrySelection = document.createElement('select');
  countrySelection.id = 'country';
  countrySelection.className = 'form-select';

  let countryOptionNode = document.createElement('option');
  countryOptionNode.innerHTML = 'Country';
  countryOptionNode.selected = true;
  countryOptionNode.disabled = true;

  countrySelection.appendChild(countryOptionNode);

  let countSize = Object.keys(countryObj).length;
  let countKeys = Object.keys(countryObj);
  let countValues = Object.values(countryObj);

  for (let i = 0; i < countSize; i++) {
    let newOptionNode = document.createElement('option');
    newOptionNode.value = countKeys[i];
    newOptionNode.innerHTML = countValues[i];

    countrySelection.appendChild(newOptionNode);
  }

  languageCountryContainer.appendChild(languageSelection);
  languageCountryContainer.appendChild(countrySelection);

  return languageCountryContainer;
};

export { selection }