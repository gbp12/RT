import axios from "axios";

const manageUserStorage = (set) => ({
  userId: null,
  userName: null,
  userMail: null,
  setUser: async (newUser) => {
    let userFetch = null;
    try {
      userFetch = await authUser(newUser);
    } catch (error) {
      throw { ...error };
    }
    set(() => ({
      /*
      userId: userFetch.id,
      userName: userFetch.name,
      userMail: userFetch.mail,
      */
      userName: "gonzalo",
      userId: 11,
      userMail: "correo@correo.com",
    }));
    return { status: 200 };
  },
});

const authUser = async (newUser) => {
  console.log("se ejecuta la funcion!");
  try {
    const postUser = await axios.get(
      "https://www.omdbapi.com/?apikey=78e4aae&s=avengers"
    );
    // TODO: aqui tengo que meter el jwt en el localstorage
    return postUser;
    throw { error: "hubo un error", status: 500 };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default manageUserStorage;
