type queryType = string | string[] | undefined;

export const getParsedSearchQuery = (query: queryType) => {
    if(typeof query === 'string') return query;

    if(Array.isArray(query)) return query[0];

    return query;
}

