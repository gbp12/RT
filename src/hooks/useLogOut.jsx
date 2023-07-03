const useLogOut = () => {
  localStorage.clear();
  window.location.replace("/auth/login");
};
export default useLogOut;
