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



for (let i = 0; i < 5; i++) {
    let str = ''
    for (let j = 0; j < 5; j++)
        str = str + j
    console.log(i, str)
}