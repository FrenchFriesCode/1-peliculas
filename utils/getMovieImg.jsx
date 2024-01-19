import placeholder from "../src/img/placeholder.png"
export function getMovieImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
  }