function showSalary(users, age) {
  let usersArr = users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`);

  let result = usersArr.join('\n');
  return result;
}
