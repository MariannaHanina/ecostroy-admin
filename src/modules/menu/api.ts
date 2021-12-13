import { TMenuItem } from "./types";

export async function fetchMenu(): Promise<TMenuItem[]> {
  return await Promise.resolve([
    {
      "id": "main",
      "title": "Главная",
      "path": "/"
    },
    {
      "id": "projects",
      "title": "Проекты",
      "path": "/projects",
      "items": [
        {
          "id": "projectsHouses",
          "title": "Дома",
          "path": "/projects/houses"
        },
        {
          "id": "projectsBathHouses",
          "title": "Бани",
          "path": "/projects/bathhouses"
        },
        {
          "id": "projectsCountryHouses",
          "title": "Дачные дома",
          "path": "/projects/countryhouses"
        }
      ]
    },
    {
      "id": "video",
      "title": "Видео",
      "path": "/video"
    },
    {
      "id": "gallery",
      "title": "Галерея",
      "path": "/gallery"
    },
    {
      "id": "services",
      "title": "Услуги",
      "path": "/services"
    },
    {
      "id": "articles",
      "title": "Статьи",
      "path": "/articles"
    },
    {
      "id": "contacts",
      "title": "Контакты",
      "path": "/contacts"
    }
  ]);
}

export async function updateMenu(menu: TMenuItem[]) {
  console.log('Here will be functional for updating Menu', menu);
}