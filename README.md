# Moment 4 - Angular 2
> Av: Jennifer Jakobsson, jeja2306@student.miun.se

### AJAX-anrop med Angular 

I momentet har anropen gjorts med Angulars inbyggda modul och HttpClient för hämta extern JSON-baserad data.
<br>
Detta har gjorts med metoden get() som skickar en förfrågan till servern för att sedan returnera ett Observable-objekt som innehåller svaret. 
<br>
<br>
Objektet som tas emot går igenom ett interface som ser ut som följande: 
<br>
``` typescript
export interface Course {
    code: string;
    coursename: string;
    progression: string;
    syllabus: string;
}
```

 [Länk till publicerad webbplats](https://jeja2306-angular1.netlify.app/)