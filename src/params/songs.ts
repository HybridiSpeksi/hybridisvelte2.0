import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
    return /^((songs)|(biisit)|(laulut)|(sanat))$/.test(param);
}) satisfies ParamMatcher