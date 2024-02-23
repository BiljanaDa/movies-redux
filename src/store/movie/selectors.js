export function movieSelector(state) {
  return state.movie.data;
}

export function searchResultsSelector(state) {
  return state.movie.searchResults;
}
export function searchTermSelector(state) {
  return state.movie.searchTerm;
}
