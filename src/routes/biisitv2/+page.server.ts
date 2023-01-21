import { error } from '@sveltejs/kit'
import type { PageServerLoad } from "./$types";
import contentfulFetch from '$lib/contentful-fetch';


export const load: PageServerLoad = async () => {
    const query = `
    {
        produktioCollection {
            items {
                nimi
                year
                biisitCollection {
                    items {
                        ...on Biisi {
                            nimi
                            vuosi
                            origin
                            sanat {
                                json
                            }
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

    const { data } = await response.json();
    return {
        produktioData: data.produktioCollection
    };
}