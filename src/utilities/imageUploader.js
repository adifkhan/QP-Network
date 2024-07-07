const imageUploader = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "adif_khan");

  const image = await fetch("https://api.cloudinary.com/v1_1/dwqwxozwv/image/upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      return data?.url;
    })
    .catch((err) => console.log(err));
  return image;
};

export default imageUploader;
