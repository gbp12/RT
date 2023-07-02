import React, { useState, useEffect, useRef } from "react";
import styles from "../styles.module.css";
import axios from "axios";
import { useQueryClient } from "react-query";
const NewTweet = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  /* FIXME: Modularizar esta logica en Custom hook */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("cerrar modal");
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  /* FIXME: Refactorizacion */
  const crearTweet = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/api/v1/tweets/create",
        { texto: e.target[0].value },
        {
          headers: {
            authorization: `${localStorage.getItem("jtw")}`,
          },
        }
      );
      queryClient.refetchQueries("allTweets");
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className={styles.tweetButton} onClick={openModal}>
        Twitear
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} ref={modalRef}>
            <h2>Tu mierda aqui</h2>
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
