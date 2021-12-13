import { useRouter, RouteRecordRaw } from 'vue-router';

type TRouteForNav = {
  path: string;
  name: string;
  subitems?: TRouteForNav[];
}

function filterByNavPart(name: string) {
  const routes = useRouter().getRoutes();

  return routes.filter(
    (route: RouteRecordRaw) => route.meta?.navPart === name
  );
}

function formatRoute({ name, path, meta }: RouteRecordRaw): TRouteForNav {
  return { 
    path, 
    name: meta?.navName as string,
    subitems: name ? filterByNavPart(name as string).map(formatRoute) : [],
  };
}

function getFirstLevelRoutes() {
  const routes = useRouter().getRoutes();
  
  return routes.filter(
    (route: RouteRecordRaw) => route.meta?.navPart == true
  );
}

export function getRoutesForNav() {
  const filteredFirstLevel = getFirstLevelRoutes();
  return filteredFirstLevel.map(formatRoute)
}

export function getPageRoutes() {
  return filterByNavPart('Pages').map(formatRoute);
}