import { TSlogan, TSloganType } from "./types";

export async function fetchSlogan(type: TSloganType): Promise<TSlogan> {

  return await Promise.resolve({
    "_id": "main",
    "type": type,
    "mainText": "Строительство",
    "subText": "домов по финской технологии \"Двойной брус\".",
    "buttonText": "Посмотреть проекты"
  });
}

export async function updateSlogan(slogan: TSlogan) {
  console.log('Here will be functional for updating Slogan', slogan);
  return await Promise.resolve({
    "_id": "main",
    "type": slogan.type,
    "mainText": "Строительство333",
    "subText": "домов по финской технологии \"Двойной брус\".",
    "buttonText": "Посмотреть проекты444"
  });
  
}