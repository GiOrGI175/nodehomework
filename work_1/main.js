console.log('HI');

const users = [];

async function getUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await resp.json();

  data.map((item) => {
    const user = {
      id: item.id,
      name: item.name,
      userName: item.username,
      email: item.email,
    };

    users.push(user);
  });
}
getUsers();

const fs = require('fs/promises');

async function writtenArray() {
  await getUsers();

  await fs.writeFile('Users.txt', JSON.stringify(users, null, 2));

  console.log('writen sucessful');
}

writtenArray();
