export const dataWithFiles = (data) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (key === "image" && value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, value);
    }
  }

  return formData;
};
export const displayInputSelectedImage = (imageFile) => {
  return URL.createObjectURL(imageFile);
};
