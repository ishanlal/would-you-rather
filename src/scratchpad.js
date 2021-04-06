  let users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: "./woman.png",
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: "./man_1.png",
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: "./man_2.png",
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  }

  let {...userData} = users
  userVal = Object.values(users)
  console.log(userData)
  let userArray = userVal.map((item) => ({...item,
    ['score']: Object.keys(item.answers).length + item.questions.length}))
  userArray.sort((a, b) => (a.score < b.score) ? 1 : -1)
  {ud: userArray}

  console.log('hmmm', userArray)

  let newObj = {...users,
               sarahedo: {
                 ...users.sarahedo,
                 ['score']: Object.keys(users.sarahedo.answers).length + users.sarahedo.questions.length
               }
              }




              let allqids = Object.keys(questions)
let qids = Object.keys(users['sarahedo']['answers']) // answered qids
console.log(allqids)
console.log(qids)
let qArray = qids.map((item) => {return questions[item]}) // answered Q array
let uaqids = allqids.filter((item)=> {
        return !(qids.includes(item))
    });
let uaqArray = uaqids.map((item) => {return questions[item]}) //
console.log(uaqArray)
//console.log(qArray)

//console.log(Object.values(questions))
