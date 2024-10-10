// let data = 'secret informations abour user'

// class User {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     viewData() {
//         console.log('website data', data);

//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         data = 'Some new DAta'
//     }
// }


// let student1 = new User('AnAINTAY', 'anain@gmail.com')
// let student2 = new User('anain', 'anain1@gmail.com')
// let student3 = new User('ana', 'anain2@gmail.com')

// let admin1 = new User('admin1', 'admin@gmail.com')


// setTimeout(() => {
//     console.log('hello');

// }, 3000);



// for (let i = 0; i < 5; i++) {
//     let str = ''
//     for (let j = 0; j < 5; j++)
//         str = str + j
//     console.log(i, str)
// }


// function getData(dataid, getNextData) {
//     setTimeout(() => {
//         console.log('data', dataid);
//         if (getNextData) {
//             getNextData()
//         }

//     }, 2000);
// }


//callback hell

// getData(1, () => {
//     console.log('getting data 2');

//     getData(2, () => {
//         console.log('getting data 3');

//         getData(3, () => {
//             console.log('getting data 4');

//             getData(4)
//         })
//     })
// })


// promises


// let promise = new Promise((resolve, reject) => {
//     console.log('i am promise');
//     reject('erroer  occuring')
// })

// function getData(dataid, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataid);
//             resolve('Sucess')
//             if (getNextData) {
//                 getNextData()
//             }

//         }, 5000);
//     }
//     )
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('i am promise');
//         reject('Success')
//     })
// }

// let promise = getPromise()
// promise.then((data) => {
//     console.log('promise full filled', data);
// })
//     .catch((error) => {
//         console.log(' error occur', error);

//     })


async function hello() {
    console.log('hello');

}