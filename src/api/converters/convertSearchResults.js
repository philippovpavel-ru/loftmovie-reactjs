function convertMovieResult(apiMovie) {
    return {
        title: apiMovie.l,
        time: undefined,
        year: apiMovie.y,
        coverSrc: apiMovie?.i?.imageUrl ?? '',
        id: apiMovie.id
    }
}

function convertActorResult(apiActor) {
    return {
        name: apiActor.l,
        avatarSrc: apiActor?.i?.imageUrl ?? '',
        id: apiActor.id
    }
}

function isMovie(apiResult) {
    return 'y' in apiResult;
}

function convertSearchResult(apiResult) {
    if (isMovie(apiResult)) {
        return convertMovieResult(apiResult);
    }

    return convertActorResult(apiResult);
}

export function convertSearchResults(apiResults) {
    return apiResults.d.map(convertSearchResult);
}