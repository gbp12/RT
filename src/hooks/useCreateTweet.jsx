const useCrearTweet = () => {
  const [status, setStatus] = useState("success");

  async function mutate(text, reply_to, next) {
    var postResponse = undefined;
    var isError = false;
    setStatus("loading");
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
      setStatus("success");
    } catch (error) {
      setStatus("error");
      isError = true;
    }
    return { postResponse, isError };
  }

  return { mutate, status };
};

export default useCrearTweet;
