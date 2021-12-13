import { TContacts } from "./types";

export async function fetchContacts(): Promise<TContacts> {
  return await Promise.resolve({
    address: "Московская обл., г. Пушкино, ул. 50 лет Комсомола, д. 49, оф. 8",
    phones: [
      "+7 (916) 973-96-51",
      "+7 (499) 347-69-93",
    ],
    email: "info@ecostroymsk.ru"
  });
}

export async function updateContacts(contacts: TContacts) {
  console.log('Here will be functional for updating Contacts', contacts);
  
}