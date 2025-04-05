// Show warning when decline button is clicked
document.getElementById('decline-button').addEventListener('click', function() {
    const warning = document.getElementById('warning');
    warning.style.display = 'flex';
    
    // Hide warning after 5 seconds
    setTimeout(function() {
      warning.style.display = 'none';
    }, 5000);
  });
  
  // Language selector animation
  const languageSelector = document.querySelector('.language-selector');
  languageSelector.addEventListener('click', function() {
    this.classList.toggle('active');
    const chevron = this.querySelector('.icon__chevron');
    
    if (this.classList.contains('active')) {
      chevron.style.transform = 'rotate(180deg)';
    } else {
      chevron.style.transform = 'rotate(0)';
    }
  });

// Language translations
const translations = {

  // English translations
  en: {
    language: "EN",
    welcome: "Welcome",
    tagline: "The jackpot is calling.<br>Will you answer?",
    privacyTitle: "Guest Wi-Fi Privacy Notice",
    privacyIntro: "Protecting your personal data is our top priority. This notice provides an overview of how we process your personal data when you use our Guest WiFi service in our casinos.",
    whoResponsible: "Who is responsible for data processing, and who can I contact?",
    dataController: "Data Controller (responsible): LVC Diamond Játékkaszinó Üzemeltető Korlátolt Felelősségű Társaság",
    registeredOffice: "Registered office: 1088 Budapest, Rákóczi út 1–3. III. em.",
    email: "e-mail: adatvedelem@lvcd.hu",
    dataProtectionOfficer: "Data Protection Officer: Lajer Ügyvédi Társulás",
    dpoOffice: "Registered office: 1024 Budapest, Lövőház utca 30.",
    dpoEmail: "e-mail: DPO.LVC@lajer.net",
    purpose: "What is the purpose of processing your data? The purpose of processing your data is to ensure the proper operation of the Guest WiFi service.",
    whatData: "What data do we use and how do we source it? IP address, MAC address, timestamp, name of the connected device, type of operating system of the connected device, which URLs it opened, when did it open the URLs, how long did it view them, how many times did it open them, when did it first appear on the network, when did it last appear on the network. The data is collected directly from the Guest WiFi user when they connect to the network.",
    legalBasis: "What is the legal basis for processing your data? The processing of your personal data is based on your consent, in accordance with Article 6(1)(a) of the GDPR.",
    notObligated: "You are not obligated to use the Guest WiFi service. By choosing to connect, you voluntarily consent to the processing of your personal data as outlined in this notice.",
    whoReceive: "Who will receive my data? Will the data be transferred to a third country?",
    dataTransfer: "Your personal data will not be transferred to any third party or third country. It will only be accessible to the Data Controller's employees who are responsible for providing and maintaining the Guest WiFi service, and only on a need-to-know basis.",
    howLong: "How long will my data be stored?",
    dataStorage: "Your data will be stored until you withdraw your consent, but no longer than 2 days after using the WiFi service.",
    rights: "What are my rights with regard to data protection? Every data subject has the right of access pursuant to Article 15 GDPR, the right to rectification pursuant to Article 16 GDPR, the right to erasure pursuant to Article 17 GDPR, the right to restriction of processing pursuant to Article 18 GDPR, the right to objection pursuant to Article 21 GDPR and the right to data portability pursuant to Article 20 GDPR.",
    furtherRights: "Furthermore, the relevant provisions of the GDPR are also applicable. You may exercise the above rights in person by the Data Controller, but you can also contact the Data Protection Officer of the Data Controller via the other contact details indicated in this notice. In addition to the above, you have the right to lodge a complaint, if if you believe that the Data Controller has infringed its obligations concerning the processing. Should you not agree with the Data Controller's answer, or the Data Controller does not respond within 25 days, you may file a petition at the Court. You may choose to start proceedings at the competent court of your domicile or residence.",
    complaint: "You may lodge a complaint (Article 77 GDPR) with the National Authority for Data Protection and Freedom of Information (in Hungarian: Nemzeti Adatvédelmi és Információszabadság Hatóság) (registered seat: 1055 Budapest, Falk Miksa utca 9-11; mail address: 1363 Budapest, Pf.: 9.; phone number: 06-1-391-1400; Fax: 06-1-391-1410; e-mail address: ugyfelszolgalat@naih.hu; website: www.naih.hu).",
    profiling: "Will profiling or fully automated decision-making processes be used? No",
    moreInfo: "For more information, please visit our Data Protection Policy at lasvegascasino.hu. The user is responsible for any damage or misuse caused by their intentional or negligent behavior while using the Guest WiFi network.",
    effective: "Effective - from 2025.04.02",
    warning: "You must accept the privacy notice to use the WiFi service.",
    decline: "Decline",
    accept: "Accept"
  },
  
  // Hungarian translations
  hu: {
    language: "HU",
    welcome: "Üdvözöljük",
    tagline: "A jackpot hívja.<br>Válaszol?",
    privacyTitle: "Vendég Wi-Fi Adatvédelmi Tájékoztató",
    privacyIntro: "Személyes adatainak védelme elsődleges prioritásunk. Ez a tájékoztató áttekintést nyújt arról, hogyan kezeljük személyes adatait, amikor Vendég WiFi szolgáltatásunkat használja kaszinóinkban.",
    whoResponsible: "Ki felelős az adatkezelésért, és kihez fordulhatok?",
    dataController: "Adatkezelő (felelős): LVC Diamond Játékkaszinó Üzemeltető Korlátolt Felelősségű Társaság",
    registeredOffice: "Székhely: 1088 Budapest, Rákóczi út 1–3. III. em.",
    email: "e-mail: adatvedelem@lvcd.hu",
    dataProtectionOfficer: "Adatvédelmi Tisztviselő: Lajer Ügyvédi Társulás",
    dpoOffice: "Székhely: 1024 Budapest, Lövőház utca 30.",
    dpoEmail: "e-mail: DPO.LVC@lajer.net",
    purpose: "Mi az adatkezelés célja? Az adatkezelés célja a Vendég WiFi szolgáltatás megfelelő működésének biztosítása.",
    whatData: "Milyen adatokat használunk és hogyan szerezzük be azokat? IP-cím, MAC-cím, időbélyeg, a csatlakoztatott eszköz neve, a csatlakoztatott eszköz operációs rendszerének típusa, mely URL-eket nyitotta meg, mikor nyitotta meg az URL-eket, mennyi ideig nézte azokat, hányszor nyitotta meg őket, mikor jelent meg először a hálózaton, mikor jelent meg utoljára a hálózaton. Az adatokat közvetlenül a Vendég WiFi felhasználótól gyűjtjük, amikor csatlakozik a hálózathoz.",
    legalBasis: "Mi az adatkezelés jogalapja? Személyes adatainak kezelése az Ön hozzájárulásán alapul, a GDPR 6. cikk (1) bekezdés a) pontjával összhangban.",
    notObligated: "Ön nem köteles használni a Vendég WiFi szolgáltatást. A csatlakozás választásával önkéntesen hozzájárul személyes adatainak a jelen tájékoztatóban foglaltak szerinti kezeléséhez.",
    whoReceive: "Ki kapja meg az adataimat? Az adatokat továbbítják harmadik országba?",
    dataTransfer: "Személyes adatait nem továbbítjuk harmadik félnek vagy harmadik országba. Azokhoz csak az Adatkezelő azon munkavállalói férhetnek hozzá, akik a Vendég WiFi szolgáltatás nyújtásáért és fenntartásáért felelősek, és csak a szükséges mértékben.",
    howLong: "Mennyi ideig tárolják az adataimat?",
    dataStorage: "Adatait a hozzájárulás visszavonásáig, de legfeljebb a WiFi szolgáltatás használatát követő 2 napig tároljuk.",
    rights: "Milyen jogaim vannak az adatvédelemmel kapcsolatban? Minden érintett jogosult a hozzáféréshez a GDPR 15. cikke szerint, a helyesbítéshez a GDPR 16. cikke szerint, a törléshez a GDPR 17. cikke szerint, az adatkezelés korlátozásához a GDPR 18. cikke szerint, a tiltakozáshoz a GDPR 21. cikke szerint és az adathordozhatósághoz a GDPR 20. cikke szerint.",
    furtherRights: "Továbbá a GDPR vonatkozó rendelkezései is alkalmazandók. A fenti jogokat személyesen gyakorolhatja az Adatkezelőnél, de kapcsolatba léphet az Adatkezelő Adatvédelmi Tisztviselőjével is a jelen tájékoztatóban megadott egyéb elérhetőségeken. A fentieken túl joga van panaszt tenni, ha úgy véli, hogy az Adatkezelő megsértette az adatkezeléssel kapcsolatos kötelezettségeit. Ha nem ért egyet az Adatkezelő válaszával, vagy az Adatkezelő 25 napon belül nem válaszol, keresetet nyújthat be a Bírósághoz. Választása szerint eljárást indíthat a lakóhelye vagy tartózkodási helye szerint illetékes bíróságon.",
    complaint: "Panaszt tehet (GDPR 77. cikk) a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (székhely: 1055 Budapest, Falk Miksa utca 9-11; levelezési cím: 1363 Budapest, Pf.: 9.; telefonszám: 06-1-391-1400; Fax: 06-1-391-1410; e-mail cím: ugyfelszolgalat@naih.hu; weboldal: www.naih.hu).",
    profiling: "Profilalkotást vagy teljesen automatizált döntéshozatali folyamatokat alkalmaznak? Nem",
    moreInfo: "További információkért kérjük, látogasson el Adatvédelmi Szabályzatunkhoz a lasvegascasino.hu oldalon. A felhasználó felelős minden olyan kárért vagy visszaélésért, amelyet szándékos vagy gondatlan magatartásával okoz a Vendég WiFi hálózat használata során.",
    effective: "Hatályos - 2025.04.02-től",
    warning: "El kell fogadnia az adatvédelmi tájékoztatót a WiFi szolgáltatás használatához.",
    decline: "Elutasítás",
    accept: "Elfogadás"
  }
};

// Initialize language functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize with saved language or default to English
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLanguage);
  
  // Setup language dropdown
  setupLanguageDropdown();
  
  // Show warning when decline button is clicked
  const declineButton = document.getElementById('decline-button');
  if (declineButton) {
    declineButton.addEventListener('click', function() {
      const warning = document.getElementById('warning');
      if (warning) {
        warning.style.display = 'flex';
        
        // Hide warning after 5 seconds
        setTimeout(function() {
          warning.style.display = 'none';
        }, 5000);
      }
    });
  }
});

// Setup language dropdown
function setupLanguageDropdown() {
  // Get the language selector button
  const languageSelector = document.querySelector('.language-selector');
  const languageOptions = document.querySelector('.language-options');
  
  if (!languageSelector || !languageOptions) return;
  
  // Toggle dropdown on click
  languageSelector.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    languageOptions.classList.toggle('show');
    const chevron = languageSelector.querySelector('.icon__chevron');
    
    if (languageOptions.classList.contains('show')) {
      if (chevron) {
        chevron.style.transform = 'rotate(180deg)';
      }
    } else {
      if (chevron) {
        chevron.style.transform = 'rotate(0)';
      }
    }
  });
  
  // Add click event to language options
  const options = document.querySelectorAll('.language-option');
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
      languageOptions.classList.remove('show');
      
      const chevron = languageSelector.querySelector('.icon__chevron');
      if (chevron) {
        chevron.style.transform = 'rotate(0)';
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!languageSelector.contains(e.target) && !languageOptions.contains(e.target)) {
      languageOptions.classList.remove('show');
      const chevron = languageSelector.querySelector('.icon__chevron');
      if (chevron) {
        chevron.style.transform = 'rotate(0)';
      }
    }
  });
  
  // Mark active language
  updateActiveLanguage();
}

// Update active language in dropdown
function updateActiveLanguage() {
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  const options = document.querySelectorAll('.language-option');
  
  options.forEach(option => {
    if (option.getAttribute('data-lang') === currentLang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// Change language
function changeLanguage(langCode) {
  // Save selected language
  localStorage.setItem('selectedLanguage', langCode);
  
  // Update active language in dropdown
  updateActiveLanguage();
  
  // Update all text elements
  updatePageText(langCode);
}

// Update all text elements on the page
function updatePageText(langCode) {
  const lang = translations[langCode];
  if (!lang) return;
  
  // Find all elements with data-key attribute
  const elements = document.querySelectorAll('[data-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    
    // Skip if translation doesn't exist
    if (!lang[key]) return;
    
    // Check if element has HTML content
    if (element.hasAttribute('data-has-html') && element.getAttribute('data-has-html') === 'true') {
      element.innerHTML = lang[key];
    } else {
      element.textContent = lang[key];
    }
  });
}