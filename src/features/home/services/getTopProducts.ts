export const getTopProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/top?limit=4&order=desc&dateFrom=2026-01-01&dateTo=2026-12-31`, {
        next: { revalidate: 60 * 60 }
    }).then(res => res.json())
        .then(data => data.data)
    return response
};