// export function validateEmail(email) {
//   var re =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z](?:[a-zA-Z-]{0,61}[a-zA-Z])?)+$/;

//   return re.test(email);
// }
export function validateEmail(email) {
  if (!email) return false;

  const trimmedEmail = email.trim();

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(trimmedEmail);
}
