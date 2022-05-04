const user = (data) => {
  return `User: ${data} logged in`;
};

let id = (id) => {
  return `ID: ${id}`;
};

let email = (email) => {
  return `Email: ${email}`;
};

module.exports = {
  user,
  id,
  email,
};
