export const splittedImages = (images: string) => {
  const imagesArray = images.split(",").map((image) => image.trim())
  return imagesArray
}