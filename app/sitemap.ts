export const baseUrl = 'https://www.mattdunn.ca';

export default async function sitemap() {
    const routes = [''].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
