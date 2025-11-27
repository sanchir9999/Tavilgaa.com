import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tavilgaa.com'

    // Бүтээгдэхүүнүүд
    const products = [
        'office-chair-1',
        'gaming-chair',
        'guest-chair',
        'office-chair-2',
        'office-chair-3',
        'office-chair-4',
        'office-chair-5',
        'training-chair-black',
        'office-table',
        'guest-table',
        'dining-table',
        'pc-desk-set',
        'office-set-deluxe',
        'desk-lamp',
        'cushion-pad',
    ]

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/About`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/quote`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/chairs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/category/tables`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/category/sets`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/category/accessories`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...products.map((slug) => ({
            url: `${baseUrl}/products/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        })),
    ]
}
