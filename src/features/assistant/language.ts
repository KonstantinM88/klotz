export type AssistantLanguage = "de" | "en" | "ru";

// The live model can reply in any language. This small detector is only for
// locally authored fallback and error copy in the presentation demo.
export function detectQuestionLanguage(question: string): AssistantLanguage {
  if (/[а-яё]/i.test(question)) return "ru";
  if (
    /\b(?:what|how|can|could|would|do|does|the|my|your|please|price|cost|window|door|fence|terrace|project|contact)\b/i.test(
      question,
    )
  )
    return "en";
  return "de";
}

type ErrorKind = "personalData" | "retry" | "connection" | "upstream";

const errors: Record<ErrorKind, Record<AssistantLanguage, string>> = {
  personalData: {
    de: "Bitte entfernen Sie E-Mail-Adressen und Telefonnummern aus Ihrer Frage. Persönliche Angaben gehören nicht in diesen Demo-Chat.",
    en: "Please remove email addresses and phone numbers from your question. Do not enter personal details in this demo chat.",
    ru: "Пожалуйста, удалите адреса электронной почты и номера телефонов из вопроса. Не вводите личные данные в этот демочат.",
  },
  retry: {
    de: "Bitte versuchen Sie es noch einmal.",
    en: "Please try again.",
    ru: "Пожалуйста, попробуйте ещё раз.",
  },
  connection: {
    de: "Die Verbindung ist gerade nicht verfügbar. Bitte versuchen Sie es noch einmal.",
    en: "The connection is temporarily unavailable. Please try again.",
    ru: "Соединение временно недоступно. Пожалуйста, попробуйте ещё раз.",
  },
  upstream: {
    de: "Die KI-Antwort ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.",
    en: "The AI response is temporarily unavailable. Please try again later.",
    ru: "Ответ ИИ временно недоступен. Пожалуйста, попробуйте позже.",
  },
};

export function assistantError(kind: ErrorKind, language: AssistantLanguage) {
  return errors[kind][language];
}
