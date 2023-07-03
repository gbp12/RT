// FIXME: 👎 mal hook, esto es una funcion no un hook
const useLogOut = () => {
  localStorage.clear();
  window.location.replace("/auth/login");
};
export default useLogOut;
