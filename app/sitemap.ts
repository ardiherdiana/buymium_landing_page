
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://buymium.id';

    // In a real application, you might fetch dynamic routes from a database here
    // For a landing page, we just list the main pages.

    const routes = [
        '',
        // Add other routes here if you have them, e.g. '/about', '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return routes;
}
