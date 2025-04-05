```markdown
# Las Vegas Casino WiFi Page

## Project Structure

```

/
├── index.html           # Main HTML page
├── error.html           # Error page for loading issues
├── css/
│   ├── normalize.css    # CSS reset
│   └── style.css        # Main styles
├── js/
│   └── script.js        # JavaScript functionality
└── public/
└── logo.svg         # Casino logo

```plaintext

## JavaScript Functionality

The `script.js` file contains the following main functions:

1. **Language Switching**: The website supports English (EN) and Hungarian (HU) languages
2. **Data Storage**: The selected language is stored in localStorage
3. **Dynamic Text Updates**: All text is automatically updated when the language changes
4. **Error Message Handling**: A warning message appears when the "Decline" button is clicked

## How to Modify the Code

### Modifying Text

The text is located in the `translations` object in the `script.js` file:

```javascript
const translations = {
  en: {
    language: "EN",
    welcome: "Welcome",
    // more English text...
  },
  hu: {
    language: "HU",
    welcome: "Üdvözöljük",
    // more Hungarian text...
  }
};
```

To add new text:

1. Add a new key to both languages
2. Add the corresponding `data-key` attribute to the HTML element


For example:

```javascript
// in script.js
en: {
  // existing text...
  newText: "New information"
},
hu: {
  // existing text...
  newText: "Új információ"
}
```

```html
&lt;!-- in index.html -->
<p data-key="newText"></p>
```

### Modifying HTML Elements

HTML elements are connected to translations with the `data-key` attribute:

```html
<h1 data-key="welcome">Welcome</h1>
```

If you want to use text containing HTML tags (e.g., `<br>`), add the `data-has-html="true"` attribute:

```html
<h2 data-key="tagline" data-has-html="true">The jackpot is calling.<br>Will you answer?</h2>
```

### Adding a New Language

To add a new language:

1. Add a new object to `translations`:


```javascript
const translations = {
  en: { /* English text */ },
  hu: { /* Hungarian text */ },
  de: {
    language: "DE",
    welcome: "Willkommen",
    // more German text...
  }
};
```

2. Add the new language to the HTML:


```html
<div class="language-options">
  <div class="language-option" data-lang="en">EN</div>
  <div class="language-option" data-lang="hu">HU</div>
  <div class="language-option" data-lang="de">DE</div>
</div>
```

### Modifying Styles

The styles are located in the `css/style.css` file. The main colors are:

- Gold: `#976826`
- Background: `#1a1a1a` and `#0a0a0a` (gradient)
- White text: `#ffffff`


## Error Page (error.html)

The error page appears when the main page cannot load. To modify it:

1. Open the `error.html` file
2. Modify the text or styles as needed
3. The error page automatically tries to reload the main page every 30 seconds


## Tips for New Developers

1. **Test Changes**: Always check your changes in different browsers and screen sizes
2. **Before Saving**: Make a backup of the files before modifying them
3. **Use Console**: Use the browser's developer tools (F12) to check for errors
4. **Incremental Changes**: Make small changes at a time and check the results


## Common Tasks

### Adding New Text

1. Add the text to the `translations` object in both languages
2. Add the corresponding HTML element with a `data-key` attribute


### Modifying Styles

1. Open the `css/style.css` file
2. Find the element you want to modify (e.g., `.button-primary`)
3. Modify the styles as needed


### Modifying Language Switcher Functionality

1. Open the `script.js` file
2. The `setupLanguageDropdown()` and `changeLanguage()` functions are responsible for language switching


If you have any questions or issues with the code, please contact the development team!



```markdown
# Las Vegas Casino WiFi Oldal

## Projekt struktúra

```

/
├── index.html           # Fő HTML oldal
├── error.html           # Hibaoldal betöltési problémák esetén
├── css/
│   ├── normalize.css    # CSS reset
│   └── style.css        # Fő stílusok
├── js/
│   └── script.js        # JavaScript funkcionalitás
└── public/
└── logo.svg         # Casino logó

```plaintext

## JavaScript működése

A `script.js` fájl a következő fő funkciókat tartalmazza:

1. **Nyelvváltás kezelése**: A weboldal támogatja az angol (EN) és magyar (HU) nyelveket
2. **Adattárolás**: A kiválasztott nyelv localStorage-ban tárolódik
3. **Dinamikus szövegfrissítés**: Az összes szöveg automatikusan frissül nyelvváltáskor
4. **Hibaüzenet kezelése**: A "Decline" gomb megnyomásakor figyelmeztető üzenet jelenik meg

## Hogyan módosítsd a kódot

### Szövegek módosítása

A szövegek a `script.js` fájlban találhatók a `translations` objektumban:

```javascript
const translations = {
  en: {
    language: "EN",
    welcome: "Welcome",
    // további angol szövegek...
  },
  hu: {
    language: "HU",
    welcome: "Üdvözöljük",
    // további magyar szövegek...
  }
};
```

Új szöveg hozzáadásához:

1. Adj hozzá egy új kulcsot mindkét nyelvhez
2. Add hozzá a megfelelő `data-key` attribútumot a HTML elemhez


Például:

```javascript
// script.js-ben
en: {
  // meglévő szövegek...
  newText: "New information"
},
hu: {
  // meglévő szövegek...
  newText: "Új információ"
}
```

```html
&lt;!-- index.html-ben -->
<p data-key="newText"></p>
```

### HTML elemek módosítása

A HTML elemek a `data-key` attribútummal vannak összekapcsolva a fordításokkal:

```html
<h1 data-key="welcome">Welcome</h1>
```

Ha HTML tageket (pl. `<br>`) tartalmazó szöveget szeretnél használni, add hozzá a `data-has-html="true"` attribútumot:

```html
<h2 data-key="tagline" data-has-html="true">The jackpot is calling.<br>Will you answer?</h2>
```

### Új nyelv hozzáadása

Új nyelv hozzáadásához:

1. Adj hozzá egy új objektumot a `translations`-hoz:


```javascript
const translations = {
  en: { /* angol szövegek */ },
  hu: { /* magyar szövegek */ },
  de: {
    language: "DE",
    welcome: "Willkommen",
    // további német szövegek...
  }
};
```

2. Add hozzá az új nyelvet a HTML-hez:


```html
<div class="language-options">
  <div class="language-option" data-lang="en">EN</div>
  <div class="language-option" data-lang="hu">HU</div>
  <div class="language-option" data-lang="de">DE</div>
</div>
```

### Stílusok módosítása

A stílusok a `css/style.css` fájlban találhatók. A fő színek:

- Arany: `#976826`
- Háttér: `#1a1a1a` és `#0a0a0a` (gradiens)
- Fehér szöveg: `#ffffff`


## Hibaoldal (error.html)

A hibaoldal akkor jelenik meg, ha a fő oldal nem tud betöltődni. Módosításához:

1. Nyisd meg az `error.html` fájlt
2. Módosítsd a szöveget vagy a stílusokat igény szerint
3. A hibaoldal automatikusan megpróbálja újratölteni a főoldalt 30 másodpercenként


## Tippek kezdő fejlesztőknek

1. **Változtatások tesztelése**: Mindig ellenőrizd a változtatásokat különböző böngészőkben és képernyőméreteken
2. **Mentés előtt**: Készíts biztonsági másolatot a fájlokról, mielőtt módosítanád őket
3. **Konzol használata**: Használd a böngésző fejlesztői eszközeit (F12) a hibák ellenőrzéséhez
4. **Fokozatos változtatások**: Egyszerre csak kis változtatásokat végezz, és ellenőrizd az eredményt


## Gyakori feladatok

### Új szöveg hozzáadása

1. Add hozzá a szöveget a `translations` objektumhoz mindkét nyelven
2. Add hozzá a megfelelő HTML elemet `data-key` attribútummal


### Stílus módosítása

1. Nyisd meg a `css/style.css` fájlt
2. Keresd meg a módosítani kívánt elemet (pl. `.button-primary`)
3. Módosítsd a stílusokat igény szerint


### Nyelvváltó működésének módosítása

1. Nyisd meg a `script.js` fájlt
2. A `setupLanguageDropdown()` és `changeLanguage()` függvények felelősek a nyelvváltásért


Ha bármilyen kérdésed vagy problémád van a kóddal kapcsolatban, kérlek, fordulj a fejlesztői csapathoz!
