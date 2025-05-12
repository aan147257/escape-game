import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'de',
        lng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: {
                translation: {
                    left: "restant",
                    resultDialogB: "Continuer",
                    quiz1Q: "Place les couleurs dans le bon ordre :",
                    quiz1Di: "Je ne suis ni le plus chaud ni le plus vif, et à mes côtés, l'ombre s'installe discrète et protectrice.",
                    quiz2Q: "Trouvez l’âge du délinquant !",
                    quiz3Q: "À quelle heure c’est passé le drame ?",
                    quiz4Q: "Placez les éléments dans l'ordre correct:",
                    quiz4D: "Résolvez la problématique, les éléments ont été mal associés et ont réagi de manière incontrôlable.",
                    quiz4A1: "carbone",
                    quiz4A2: "oxygène",
                    quiz4A3: "calcium",
                }
            },
            de:{

                translation: {
                    left: "verbleibend",
                    resultDialogB: "Weiter",
                    quiz1Q: "Setze die Farben in die richtige Reihenfolge:",
                    quiz1Di: "Ich bin weder der Wärmste noch der Hellste, und an meiner Seite breitet sich der Schatten still und schützend aus.",
                    quiz2Q: "Finde das Alter des Täters heraus!",
                    quiz3Q: "Zu welcher Uhrzeit geschah das Unglück?",
                    quiz4Q: "Bringen Sie die Elemente in die richtige Reihenfolge:",
                    quiz4D: "Löst das Problem – die Elemente wurden falsch kombiniert und haben unkontrolliert reagiert.",
                    quiz4A1: "Kohlenstoff",
                    quiz4A2: "Sauerstoff",
                    quiz4A3: "Calcium",

                }
            },
            mx:{
                translation: {
                    left: "verbleibend",
                    resultDialogB: "Continuer",
                    quiz1Q: "Setze die Farben in die richtige Reihenfolge:",
                    quiz1Di: "Je ne suis ni le plus chaud ni le plus vif, et à mes côtés, l'ombre s'installe discrète et protectrice.",
                    quiz2Q: "Trouvez l’âge du délinquant !",
                    quiz3Q: "Zu welcher Uhrzeit geschah das Unglück?",
                    quiz4Q: "Bringen Sie die Elemente in die richtige Reihenfolge:",
                    quiz4D: "Résolvez la problématique, les éléments ont été mal associés et ont réagi de manière incontrôlable.",
                    quiz4A1: "carbone",
                    quiz4A2: "oxygène",
                    quiz4A3: "calcium",
                }
            }
        }
    });
export default i18n;