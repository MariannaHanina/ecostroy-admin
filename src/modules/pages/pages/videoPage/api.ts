import { TVideo } from "./types";

export async function fetchVideo(): Promise<TVideo[]> {
  return await Promise.resolve([
    {
      "_id": "nv1",
      "type": "newVideo",
      "video": "https://www.youtube.com/embed/6tjOkwEzwxE",
      "title": "Обзор дома из двойного бруса",
      "text": "Мы расскажем как чувствует себя дом из двойного бруса после зимы. Мы приехали к нашему заказчику, которому построили дом ровно год назад."
    },
    {
      "_id": "nv2",
      "type": "newVideo",
      "video": "https://www.youtube.com/embed/6tjOkwEzwxE",
      "title": "Обзор дома из двойного бруса2",
      "text": "И наш клиент поделился своими мыслями о доме. Показал, как обустроил дом и рассказал как прошла первая зима в таком доме. Загородный дом из двойного бруса - это удобный и экологичный вариант. По сравнению с аналогами такой дом теплее и прочнее."
    },
    {
      "_id": "atv1",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/g_KNSXfCw9Y",
      "title": "Фундамент для дома",
      "text": "В первом видео цикла мы расскажем как подготовить фундамент винтовые сваи для дома из двойного бруса."
    },
    {
      "_id": "atv2",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/qMRsO55rEEw",
      "title": "Как выбрать домокомплект?",
      "text": "В данном видео мы будем рады показать вам на что стоит обращать внимание при выборе домокомплекта."
    },
    {
      "_id": "atv3",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/38g7K1X2CJw",
      "title": "Утепление дома эковатой",
      "text": "В данном видео мы расскажем, как правильно выбрать эковату для утепления дома из двойного бруса и почему мы выбрали \"Донскую эковату\"."
    },
    {
      "_id": "atv4",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/NRocSUl8uUM",
      "title": "Процесс строительства",
      "text": "В данном видео мы расскажем про стандартную комплектацию дома из 70-го бруса."
    },
    {
      "_id": "atv5",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/YBQ6LCFcahI",
      "title": "Крепление лаг второго этажа",
      "text": "В видео мы расскажем как выглядят лаги пола второго этажа."
    },
    {
      "_id": "atv6",
      "type": "aboutTech",
      "video": "https://www.youtube.com/embed/puli2OD76Zs",
      "title": "Как сделать крышу дома",
      "text": "Мы покажем, как правильно установить стропильную часть крыши в доме из двойного бруса."
    },
    {
      "_id": "r1",
      "type": "review",
      "video": "https://www.youtube.com/embed/6tjOkwEzwxE",
      "title": "Обзор дома из двойного бруса",
      "text": "Мы расскажем как чувствует себя дом из двойного бруса после зимы. Мы приехали к нашему заказчику, которому построили дом ровно год назад."
    },
    {
      "_id": "r2",
      "type": "review",
      "video": "https://www.youtube.com/embed/DdEdYKm4u4A",
      "title": "Обзор дома из двойного бруса",
      "text": "В данном видео мы покажем готовый дом построенный по технологии \"Двойной брус\"."
    },
    {
      "_id": "r3",
      "type": "review",
      "video": "https://www.youtube.com/embed/Ky4OjXYaFA8",
      "title": "Обзор готового дома",
      "text": "В данном видео мы покажем готовый дом построенный по технологии \"Двойной брус\"."
    }
  ]);
}

export async function updateOneVideo(video: TVideo) {
  console.log('Here will be functional for updating One Video', video);
  return await Promise.resolve(Object.assign(video, {title: video.title + '333'}));
  
}