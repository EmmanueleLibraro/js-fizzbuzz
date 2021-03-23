//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numeri = 100;
console.log(numeri);

for (var i = 0; i < 100; i++){
    numeri[i] = i + 1;
}

for (var i = 0; i < numeri.length; i++){
    console.log(numeri[i]);
}

var prova = [];

for( var value = 1; value <= 100; value++){
    prova.push(value);
}

for( var i = 0; i <= prova.length; i++){
    console.log(prova[i]);
}