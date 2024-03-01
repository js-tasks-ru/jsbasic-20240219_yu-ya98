function namify(users) {
  let names = users.map((user) => {
    return `${user.name}`;
  });

  return names;
}
