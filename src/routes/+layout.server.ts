import { error } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types';
import contentfulFetch from '$lib/contentful-fetch'

export const load: LayoutServerLoad = async ({ url }) => {
    const query = `
    {
        pageCollection (where: {
            uid: "${url.pathname == '/' ? 'etusivu' : url.pathname.substring(1)}"
        }) {
            items {
                title
                uid
                blocksCollection {
                    items {
                        content {
                            json
                        }
                    }
                }
            }
        }
    }
    `
    const response = await contentfulFetch(query);
    if (!response.ok) {
        throw error(404, {
            message: response.statusText
        })
    }

    const { data } = await response.json()
    const { items } = data.pageCollection

    return {
        pages: items.map((e) => {
            return {
                ...e
            }
        })
    }

}