import React from 'react'

type Props = {
    params: Promise<{ slug?: string[] }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function page({ params, searchParams }: Props) {

    const { slug } = await params;
    const searchParam = await searchParams

    console.log("URL sluglari:", slug)

    if (!slug || slug.length === 0) {
        return (
            <div>
                <h1>Barcha mahsulotlar sahifasi</h1>
            </div>
        )
    }


    if (!slug || slug.length === 1) {
        const categoryName = slug[0];
        return (
            <div>
                <h1>kategorya sahifasi {categoryName}</h1>
            </div>
        )
    }

    if (!slug || slug.length === 2) {
        const categoryName = slug[0];
        const productId = slug[1]
        return (
            <div>
                <h1>Mahsulot tafsiloti sahifasi</h1>
                <p>Kategoriya: {categoryName}</p>
                <p>Mahsulot ID: {productId}</p>
            </div>
        )
    }

    return (
        <div>page</div>
    )
}

