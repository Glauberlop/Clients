const clients   = [

  {
    name: 'João',
    email: 'joao@test.com'
  },
  {
    name: 'Paulo',
    email: 'paulo@test.com'
  },
  {
    name: 'Ricardo',
    email: 'ricardo@test.com'
  }
]

const list = document.getElementById('clients')

console.log(list)

function createParagraph(textContent, parent) {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);
  parent.appendChild(paragraph);
}


clients.forEach((client) => {
  const listItem = document.createElement('li');
  createParagraph(client.name, listItem);
  createParagraph(client.email, listItem);
  list.appendChild(listItem);
})

