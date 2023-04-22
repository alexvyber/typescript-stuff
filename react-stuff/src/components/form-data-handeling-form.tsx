import * as React from 'react';

function Form1() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Do something with the data
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type="text" name="email" value={email}
       onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

// --

function Form2() {
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const name = formData.get('name')
    // Do something with the data
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <button type="submit">Submit</button>
    </form>
  )
}
