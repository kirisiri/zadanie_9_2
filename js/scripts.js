/* Zadeklaruj dwie tablice: jedną zawierające imiona damskie oraz drugą męskie.

Połącz dwie tablice w jedną zawierającą wszystkie imiona.

Za pomocą dostępnych funkcji i przy użyciu instrukcji warunkowej spróbuj dodać jakieś imię.

Uwaga: jeśli imię znajduje się już w tablicy, nie może być dodane ponownie.

Sprawdź, czy wszystko działa prawidłowo. Czy dodawanie nowych imion do tablicy jest możliwe, a jednocześnie zostało zablokowane dodawanie duplikatów?

W pliku 'scripts.js' zadeklaruj dwie tablice: */

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
// Użyj funkcji concat(), aby połączyć ze sobą powyższe dwie tablice i przypisz je do zmiennej allNames.
var allNames = femaleNames.concat(maleNames);
// Poniżej zadeklaruj nową zmienną zawierającą napis var newName = 'Marian'
alert('Tablica z imionami: ' + allNames);

var newName = 'Magda';
alert('Chcesz dodac imie: ' + newName + ' - sprawdze, czy mozna');

// Stwórz instrukcję warunkową if i sprawdź, czy wartość wyrażenia allNames.indexOf(newName) === -1.
if ( allNames.indexOf(newName) === -1 ) {
//Jeśli powyższe wyrażenie jest spełnione, za pomocą funkcji push() dodaj tę zmienną do tablicy allNames.
	allNames.push(newName); 
	alert('Mozna dodac, gdyz jest to nowe imie. Nowa lista to: ' + allNames);
}
else alert('To imie juz jest w tablicy');