//  name of collections by route
export function getKey( route ) {
    if (route.matched.some(item => item.meta.makeCollections)) {
        const basePath = route.path.split('/').slice(1, 2);
        return  basePath[0].trim();
    }
}