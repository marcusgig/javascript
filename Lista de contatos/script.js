const users = {name: 'Marcus', age: 35, street: 'Rua dos Alfeneiros'}
for (const key in users) {

    console.log(`${key}: ${users[key]}`);    
}

do {
    while (true) {
        console.log('Executando o while infinito');
    }
} while (condition);