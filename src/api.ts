import api from 'https://deno.land/x/api/index.ts' // For Ts
// import api from 'https://deno.land/x/api/index.js' // For JS

interface User {
    userId: number;
    id: number;
    title: string,
    completed: boolean
}

// const pom: any = await api.get('');

const users: User[] = await api.get('https://jsonplaceholder.typicode.com/todos/?completed=true');
// console.log(users)

const user1: User = await api.get('https://jsonplaceholder.typicode.com/todos/1');
// console.log(user1)

const insert: User = await api.post('https://jsonplaceholder.typicode.com/todos/', {
    userId: 5,
    title: "excepturi a et neque qui expedita vel voluptate",
    completed: false
});
// console.log(insert)

const delete1: User = await api.delete('https://jsonplaceholder.typicode.com/todos/1');
// console.log(delete1)

const update = await api.put('https://jsonplaceholder.typicode.com/todos/109', {
    userId: 109,
    title: "one",
    completed: true
});
console.log(update)
