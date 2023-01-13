import { error } from '@sveltejs/kit'
import type { PageServerLoad } from "./$types";
import contentfulFetch from '$lib/contentful-fetch';


export const load: PageServerLoad = async () => {
    const query = `
    {
        organizationCollection {
            items {
                data
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
        orgData: data.organizationCollection
    }
}