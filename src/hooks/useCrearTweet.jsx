const useCrearTweet = async (text, reply_to, next) => {
  var postResponse = undefined;
  var isError = false;
  try {
    postResponse = await fetch("http://localhost:3000/api/v1/tweets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("jtw")}`,
      },
      body: JSON.stringify({ texto: text }),
    });
    if (next) {
      next();
    }
  } catch (error) {
    console.log(error);
    isError = true;
  }
  return { postResponse, isError };
};

export default useCrearTweet;
