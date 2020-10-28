// const promise1 = fetch('/data.json')

// const promise2 = promise1.then((response) => response.json())

// promise2.then(console.log)

// fetch('https://randomuser.me/api?results=10')
//   .then((response) => response.json())
//   .then((data) => data.results)
//   .then(console.log)

const handleUsers = (users) => {

  // users.forEach((user) => {
  //   console.log(user)
  // })
  users.reduce((r, user) => {
    // console.log(user)
    return r
  }, {})
  
  // const names = users.map((user) => {
  //   return `${user.name.first} ${user.name.last}`
  // })
  const names = users.reduce(
    (r, user) => {
      return r.concat(`${user.name.first} ${user.name.last}`)
    },
    []
  )
  // console.log(names)
  const namesObject = users.reduce(
    (r, user) => {
      return {
        ...r,
        [user.login.uuid]: user
      }
    },
    {}
  )
  // console.log(namesObject)

  // const age = users
  //   .map((user) => user.dob.age)
  //   .reduce((r, age) => r + age, 0)
  const age = users.reduce(
    (r, user)=>{
      return r + user.dob.age
    },
    0
  )
  // console.log(age)

  const usersByRegistrationDate = users.reduce(
    (r, user) => {
      const regAge = user.registered.age
      return {
        ...r,
        [regAge]: r[regAge] ? r[regAge].concat(user) : [user]
      }
    },
    {}
  )
  console.log(usersByRegistrationDate)
  
}

const fetchUsers = (count = 100) => {
  return fetch(`https://randomuser.me/api?results=${count}`)
    .then((response) => response.json())
    .then((data) => data.results)
}

const usersPromise = fetchUsers()

usersPromise.then(handleUsers)
