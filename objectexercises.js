// let address = {
//     street: 'Kirbster Ln',
//     city: 'Missouri City',
//     zipCode: 77459,
// };

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address)

// Factory Function:
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// // Constructor Function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipCode;

// }

// let address1 = new Address('Kirbster Ln', 'Missouri City', 77459);
// let address2 = new Address('Kirbster Ln', 'Missouri City', 77459);

// //console.log(address)

// function areEqual(address1, address2) {
//     for (let key in address1)
//         if (address1[key] !== address2[key])
//             return false;
//     return true;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(address1,address2))
// console.log(areSame(address1,address1))

// let blogPost = {
//     title: 'Ashlee\'s Blog',
//     body: 'Welcome to my blog!',
//     author: 'Ashlee Ajala',
//     views: 10000,
//     comments: [
//         {author: 'User101', body: 'I love your blog!'},
//         {author: 'User102', body: 'Great blog!'}
//     ],
//     isLive : true
// };

// console.log(blogPost);

// function BlogPost(title, body, author) {
//     this.title = title,
//     this.body = body,
//     this.author = author
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// };

// post1 = new BlogPost('Ashlee\'s Blog','Welcome to my blog!','Ashlee Ajala')
// console.log(post1);

let priceRangeObjects = 
[
    {   label: '$',
        tooltip: 'Inexpensive',
        minPrice: 0,
        maxPrice: 10
    },
    {   label: '$$',
        tooltip: 'Moderate',
        minPrice: 11,
        maxPrice: 20
    },
    {   label: '$$$',
        tooltip: 'Expensive',
        minPrice: 21,
        max: 50
    }
];