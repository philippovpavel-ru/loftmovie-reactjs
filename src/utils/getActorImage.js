const PLACEHOLDER_URL = "./assets/images/actor-placeholder.png";

export function getActorImage(avatarSrc) {
  const src = avatarSrc ? avatarSrc : PLACEHOLDER_URL;

  return src;
}
