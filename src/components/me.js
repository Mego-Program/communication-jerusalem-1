export default function me() {
  try {
    // let key = localStorage.key(2);
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    return { userId: user["id"], name: user["username"], image: ["image"] };
  } catch (error) {

    return {
      userId: "11vdfzx11bdf1",
      name: "Fake User",
      image:
        "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    };
  }
}
