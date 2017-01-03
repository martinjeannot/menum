Ext.define('Menum.util.Config', {
    singleton: true,

    config: {
        //apiRootURL: 'http://192.168.0.18:8080/menum/api/v1', // DEV
        apiRootURL: 'http://geomenum.com/menum/api/v1', // PROD
        bottomBannerAdUnitID : 'ca-app-pub-4583568583034056/7427647323',

        restaurantSearchRadius: [
            {text: '500 m', value: 0.5},
            {text: '1 km', value: 1},
            {text: '2 km', value: 2},
            {text: '5 km', value: 5},
            {text: '10 km', value: 10},
            {text: '20 km', value: 20},
            {text: '50 km', value: 50}
        ],

        cuisines: [
            {text: 'config.cuisine.any', value: '*'},

            {text: 'config.cuisine.african', value: 'AFRICAN'},
            {text: 'config.cuisine.american', value: 'AMERICAN'},
            {text: 'config.cuisine.asian', value: 'ASIAN'},
            {text: 'config.cuisine.bakery', value: 'BAKERY'},
            {text: 'config.cuisine.barbecue', value: 'BARBECUE'},
            {text: 'config.cuisine.british', value: 'BRITISH'},
            {text: 'config.cuisine.cafe', value: 'CAFE'},
            {text: 'config.cuisine.creole', value: 'CAJUN_CREOLE'},
            {text: 'config.cuisine.caribbean', value: 'CARIBBEAN'},
            {text: 'config.cuisine.chinese', value: 'CHINESE'},
            {text: 'config.cuisine.continental', value: 'CONTINENTAL'},
            {text: 'config.cuisine.delicatessen', value: 'DELICATESSEN'},
            {text: 'config.cuisine.dessert', value: 'DESSERT'},
            {text: 'config.cuisine.easternEuropean', value: 'EASTERN_EUROPEAN'},
            {text: 'config.cuisine.fusionEclectic', value: 'FUSION_ECLECTIC'},
            {text: 'config.cuisine.european', value: 'EUROPEAN'},
            {text: 'config.cuisine.french', value: 'FRENCH'},
            {text: 'config.cuisine.german', value: 'GERMAN'},
            {text: 'config.cuisine.globalInternational', value: 'GLOBAL_INTERNATIONAL'},
            {text: 'config.cuisine.greek', value: 'GREEK'},
            {text: 'config.cuisine.indian', value: 'INDIAN'},
            {text: 'config.cuisine.irish', value: 'IRISH'},
            {text: 'config.cuisine.italian', value: 'ITALIAN'},
            {text: 'config.cuisine.japanese', value: 'JAPANESE'},
            {text: 'config.cuisine.mediterranean', value: 'MEDITERRANEAN'},
            {text: 'config.cuisine.mexicanSouthwestern', value: 'MEXICAN_SOUTHWESTERN'},
            {text: 'config.cuisine.middleEastern', value: 'MIDDLE_EASTERN'},
            {text: 'config.cuisine.pizza', value: 'PIZZA'},
            {text: 'config.cuisine.pub', value: 'PUB'},
            {text: 'config.cuisine.seafood', value: 'SEAFOOD'},
            {text: 'config.cuisine.soups', value: 'SOUPS'},
            {text: 'config.cuisine.southAmerican', value: 'SOUTH_AMERICAN'},
            {text: 'config.cuisine.spanish', value: 'SPANISH'},
            {text: 'config.cuisine.steakhouse', value: 'STEAKHOUSE'},
            {text: 'config.cuisine.sushi', value: 'SUSHI'},
            {text: 'config.cuisine.thai', value: 'THAI'},
            {text: 'config.cuisine.vegetarian', value: 'VEGETARIAN'},
            {text: 'config.cuisine.vietnamese', value: 'VIETNAMESE'}
        ],

        travelModes: [
            {text: 'resources/images/WALKING_icon_48x48.png', value: google.maps.TravelMode.WALKING},
            {text: 'resources/images/BICYCLING_icon_48x48.png', value: google.maps.TravelMode.BICYCLING},
            {text: 'resources/images/DRIVING_icon_48x48.png', value: google.maps.TravelMode.DRIVING}
        ],

        currencyTable: {
            USD: '&#x0024;',
            EUR: '&#x20AC;',
            GBP: '&#x00A3;',
            JPY: '&#x00A5;'
        },

        availableLanguages: [
            { abbr : 'aa', text : 'AA - Afar' },
            { abbr : 'ab', text : 'AB - Abkhazian' },
            { abbr : 'ae', text : 'AE - Avestan' },
            { abbr : 'af', text : 'AF - Afrikaans' },
            { abbr : 'ak', text : 'AK - Akan' },
            { abbr : 'am', text : 'AM - Amharic' },
            { abbr : 'an', text : 'AN - Aragonese' },
            { abbr : 'ar', text : 'AR - العربية' },
            { abbr : 'as', text : 'AS - Assamese' },
            { abbr : 'av', text : 'AV - Avaric' },
            { abbr : 'ay', text : 'AY - Aymara' },
            { abbr : 'az', text : 'AZ - Azerbaijani' },
            { abbr : 'ba', text : 'BA - Bashkir' },
            { abbr : 'be', text : 'BE - беларускі' },
            { abbr : 'bg', text : 'BG - български' },
            { abbr : 'bh', text : 'BH - Bihari' },
            { abbr : 'bi', text : 'BI - Bislama' },
            { abbr : 'bm', text : 'BM - Bambara' },
            { abbr : 'bn', text : 'BN - Bengali' },
            { abbr : 'bo', text : 'BO - Tibetan' },
            { abbr : 'br', text : 'BR - Breton' },
            { abbr : 'bs', text : 'BS - Bosnian' },
            { abbr : 'ca', text : 'CA - català' },
            { abbr : 'ce', text : 'CE - Chechen' },
            { abbr : 'ch', text : 'CH - Chamorro' },
            { abbr : 'co', text : 'CO - Corsican' },
            { abbr : 'cr', text : 'CR - Cree' },
            { abbr : 'cs', text : 'CS - čeština' },
            { abbr : 'cu', text : 'CU - Church Slavic' },
            { abbr : 'cv', text : 'CV - Chuvash' },
            { abbr : 'cy', text : 'CY - Welsh' },
            { abbr : 'da', text : 'DA - Dansk' },
            { abbr : 'de', text : 'DE - Deutsch' },
            { abbr : 'dv', text : 'DV - Divehi' },
            { abbr : 'dz', text : 'DZ - Dzongkha' },
            { abbr : 'ee', text : 'EE - Ewe' },
            { abbr : 'el', text : 'EL - Ελληνικά' },
            { abbr : 'en', text : 'EN - English' },
            { abbr : 'eo', text : 'EO - Esperanto' },
            { abbr : 'es', text : 'ES - español' },
            { abbr : 'et', text : 'ET - Eesti' },
            { abbr : 'eu', text : 'EU - Basque' },
            { abbr : 'fa', text : 'FA - Persian' },
            { abbr : 'ff', text : 'FF - Fulah' },
            { abbr : 'fi', text : 'FI - suomi' },
            { abbr : 'fj', text : 'FJ - Fijian' },
            { abbr : 'fo', text : 'FO - Faroese' },
            { abbr : 'fr', text : 'FR - français' },
            { abbr : 'fy', text : 'FY - Frisian' },
            { abbr : 'ga', text : 'GA - Gaeilge' },
            { abbr : 'gd', text : 'GD - Scottish Gaelic' },
            { abbr : 'gl', text : 'GL - Gallegan' },
            { abbr : 'gn', text : 'GN - Guarani' },
            { abbr : 'gu', text : 'GU - Gujarati' },
            { abbr : 'gv', text : 'GV - Manx' },
            { abbr : 'ha', text : 'HA - Hausa' },
            { abbr : 'hi', text : 'HI - हिंदी' },
            { abbr : 'ho', text : 'HO - Hiri Motu' },
            { abbr : 'hr', text : 'HR - hrvatski' },
            { abbr : 'ht', text : 'HT - Haitian' },
            { abbr : 'hu', text : 'HU - magyar' },
            { abbr : 'hy', text : 'HY - Armenian' },
            { abbr : 'hz', text : 'HZ - Herero' },
            { abbr : 'ia', text : 'IA - Interlingua' },
            { abbr : 'ie', text : 'IE - Interlingue' },
            { abbr : 'ig', text : 'IG - Igbo' },
            { abbr : 'ii', text : 'II - Sichuan Yi' },
            { abbr : 'ik', text : 'IK - Inupiaq' },
            { abbr : 'in', text : 'IN - Bahasa Indonesia' },
            { abbr : 'io', text : 'IO - Ido' },
            { abbr : 'is', text : 'IS - íslenska' },
            { abbr : 'it', text : 'IT - italiano' },
            { abbr : 'iu', text : 'IU - Inuktitut' },
            { abbr : 'iw', text : 'IW - עברית' },
            { abbr : 'ja', text : 'JA - 日本語' },
            { abbr : 'ji', text : 'JI - Yiddish' },
            { abbr : 'jv', text : 'JV - Javanese' },
            { abbr : 'ka', text : 'KA - Georgian' },
            { abbr : 'kg', text : 'KG - Kongo' },
            { abbr : 'ki', text : 'KI - Kikuyu' },
            { abbr : 'kj', text : 'KJ - Kwanyama' },
            { abbr : 'kk', text : 'KK - Kazakh' },
            { abbr : 'kl', text : 'KL - Greenlandic' },
            { abbr : 'km', text : 'KM - Khmer' },
            { abbr : 'kn', text : 'KN - Kannada' },
            { abbr : 'ko', text : 'KO - 한국어' },
            { abbr : 'kr', text : 'KR - Kanuri' },
            { abbr : 'ks', text : 'KS - Kashmiri' },
            { abbr : 'ku', text : 'KU - Kurdish' },
            { abbr : 'kv', text : 'KV - Komi' },
            { abbr : 'kw', text : 'KW - Cornish' },
            { abbr : 'ky', text : 'KY - Kirghiz' },
            { abbr : 'la', text : 'LA - Latin' },
            { abbr : 'lb', text : 'LB - Luxembourgish' },
            { abbr : 'lg', text : 'LG - Ganda' },
            { abbr : 'li', text : 'LI - Limburgish' },
            { abbr : 'ln', text : 'LN - Lingala' },
            { abbr : 'lo', text : 'LO - Lao' },
            { abbr : 'lt', text : 'LT - Lietuvių' },
            { abbr : 'lu', text : 'LU - Luba-Katanga' },
            { abbr : 'lv', text : 'LV - Latviešu' },
            { abbr : 'mg', text : 'MG - Malagasy' },
            { abbr : 'mh', text : 'MH - Marshallese' },
            { abbr : 'mi', text : 'MI - Maori' },
            { abbr : 'mk', text : 'MK - македонски' },
            { abbr : 'ml', text : 'ML - Malayalam' },
            { abbr : 'mn', text : 'MN - Mongolian' },
            { abbr : 'mo', text : 'MO - Moldavian' },
            { abbr : 'mr', text : 'MR - Marathi' },
            { abbr : 'ms', text : 'MS - Bahasa Melayu' },
            { abbr : 'mt', text : 'MT - Malti' },
            { abbr : 'my', text : 'MY - Burmese' },
            { abbr : 'na', text : 'NA - Nauru' },
            { abbr : 'nb', text : 'NB - Norwegian Bokmål' },
            { abbr : 'nd', text : 'ND - North Ndebele' },
            { abbr : 'ne', text : 'NE - Nepali' },
            { abbr : 'ng', text : 'NG - Ndonga' },
            { abbr : 'nl', text : 'NL - Nederlands' },
            { abbr : 'nn', text : 'NN - Norwegian Nynorsk' },
            { abbr : 'no', text : 'NO - norsk' },
            { abbr : 'nr', text : 'NR - South Ndebele' },
            { abbr : 'nv', text : 'NV - Navajo' },
            { abbr : 'ny', text : 'NY - Nyanja' },
            { abbr : 'oc', text : 'OC - Occitan' },
            { abbr : 'oj', text : 'OJ - Ojibwa' },
            { abbr : 'om', text : 'OM - Oromo' },
            { abbr : 'or', text : 'OR - Oriya' },
            { abbr : 'os', text : 'OS - Ossetian' },
            { abbr : 'pa', text : 'PA - Panjabi' },
            { abbr : 'pi', text : 'PI - Pali' },
            { abbr : 'pl', text : 'PL - polski' },
            { abbr : 'ps', text : 'PS - Pushto' },
            { abbr : 'pt', text : 'PT - português' },
            { abbr : 'qu', text : 'QU - Quechua' },
            { abbr : 'rm', text : 'RM - Raeto-Romance' },
            { abbr : 'rn', text : 'RN - Rundi' },
            { abbr : 'ro', text : 'RO - română' },
            { abbr : 'ru', text : 'RU - русский' },
            { abbr : 'rw', text : 'RW - Kinyarwanda' },
            { abbr : 'sa', text : 'SA - Sanskrit' },
            { abbr : 'sc', text : 'SC - Sardinian' },
            { abbr : 'sd', text : 'SD - Sindhi' },
            { abbr : 'se', text : 'SE - Northern Sami' },
            { abbr : 'sg', text : 'SG - Sango' },
            { abbr : 'si', text : 'SI - Sinhalese' },
            { abbr : 'sk', text : 'SK - Slovenčina' },
            { abbr : 'sl', text : 'SL - Slovenščina' },
            { abbr : 'sm', text : 'SM - Samoan' },
            { abbr : 'sn', text : 'SN - Shona' },
            { abbr : 'so', text : 'SO - Somali' },
            { abbr : 'sq', text : 'SQ - shqipe' },
            { abbr : 'sr', text : 'SR - Српски' },
            { abbr : 'ss', text : 'SS - Swati' },
            { abbr : 'st', text : 'ST - Southern Sotho' },
            { abbr : 'su', text : 'SU - Sundanese' },
            { abbr : 'sv', text : 'SV - svenska' },
            { abbr : 'sw', text : 'SW - Swahili' },
            { abbr : 'ta', text : 'TA - Tamil' },
            { abbr : 'te', text : 'TE - Telugu' },
            { abbr : 'tg', text : 'TG - Tajik' },
            { abbr : 'th', text : 'TH - ไทย' },
            { abbr : 'ti', text : 'TI - Tigrinya' },
            { abbr : 'tk', text : 'TK - Turkmen' },
            { abbr : 'tl', text : 'TL - Tagalog' },
            { abbr : 'tn', text : 'TN - Tswana' },
            { abbr : 'to', text : 'TO - Tonga' },
            { abbr : 'tr', text : 'TR - Türkçe' },
            { abbr : 'ts', text : 'TS - Tsonga' },
            { abbr : 'tt', text : 'TT - Tatar' },
            { abbr : 'tw', text : 'TW - Twi' },
            { abbr : 'ty', text : 'TY - Tahitian' },
            { abbr : 'ug', text : 'UG - Uighur' },
            { abbr : 'uk', text : 'UK - українська' },
            { abbr : 'ur', text : 'UR - Urdu' },
            { abbr : 'uz', text : 'UZ - Uzbek' },
            { abbr : 've', text : 'VE - Venda' },
            { abbr : 'vi', text : 'VI - Tiếng Việt' },
            { abbr : 'vo', text : 'VO - Volapük' },
            { abbr : 'wa', text : 'WA - Walloon' },
            { abbr : 'wo', text : 'WO - Wolof' },
            { abbr : 'xh', text : 'XH - Xhosa' },
            { abbr : 'yo', text : 'YO - Yoruba' },
            { abbr : 'za', text : 'ZA - Zhuang' },
            { abbr : 'zh', text : 'ZH - 中文' },
            { abbr : 'zu', text : 'ZU - Zulu' }
        ]
    },

    getRestaurantsURL: function() {
        return this.getApiRootURL() + '/restaurants';
    },

    getCurrencySymbol: function(currencyCode) {
        return this.getCurrencyTable()[currencyCode] ? this.getCurrencyTable()[currencyCode] : currencyCode;
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});