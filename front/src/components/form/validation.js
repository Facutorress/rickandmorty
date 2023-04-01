const validation = (userData, errors, setErrors) => {
  if (!userData.username) {
    setErrors({ ...errors, username: "Email vacío" });
  } else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  )
    setErrors({ ...errors, username: "Email inválido" });
  if (!userData.password) {
    setErrors({ ...errors, password: "Password vacía" });
  } else if (userData.password.length <= 6 || userData.password.length >= 10) {
    setErrors({
      ...errors,
      password: "Password debe tener entre 6 y 10 caracteres",
    });
  } else setErrors({ ...errors, password: "" });
};
export default validation;
