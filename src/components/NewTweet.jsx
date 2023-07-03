import styles from "../styles.module.css";
import useManageModal from "../hooks/useManageModal";
import useCreateTweet from "../hooks/useCrearTweet";
const NewTweet = () => {
  const modal = useManageModal();
  const { mutate, data, error, status } = useCreateTweet();

  const crearTweet = async (e) => {
    e.preventDefault();

    const { postData, isError } = await mutate(
      e.target[0].value,
      "persona a la que se responde el tweet"
    );

    modal.closeModal();
  };

  return (
    <>
      <button className={styles.tweetButton} onClick={modal.openModal}>
        Twitear
      </button>

      {modal.isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Tu mierda aqui </h2>{" "}
              <h2
                style={{ cursor: "pointer", marginRight: "10px" }}
                onClick={modal.closeModal}
              >
                X
              </h2>
            </div>
            <form
              onSubmit={(e) => crearTweet(e)}
              className={styles.newTweetForm}
            >
              <textarea placeholder="Escribe, hijo de puta" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTweet;
