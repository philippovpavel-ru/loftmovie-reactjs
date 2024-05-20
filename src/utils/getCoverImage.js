const PLACEHOLDER_URL = "./assets/images/movie-placeholder.jpg";

export function getCoverImage(coverSrc) {
  const src = coverSrc ? coverSrc : PLACEHOLDER_URL;

  return src;
}
