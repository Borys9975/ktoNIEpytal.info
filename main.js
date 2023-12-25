let texts = [
  "Ankietowanie 90% Polaków... i innych ludziów...",
  "Zbieranie informacji z grupek na Facebooku... i pornhub'ie...",
  "Szukanie odpowiedzi wśród amerykańskich naukowców... i gwiazd porno...",
  "Analizowanie wiekowych tekstów kultury... omg serio?...",
  "Rozwiązywanie ogromnych układów równań... takich jak 2 + 2 = 5...",
  "Przeszukiwanie wszystkich zakątków świata... i kosmosu...",
  "Proszenie o pomoc NASA... i osób spoza tej planety...",
  "Szukanie eksperta w tej dziedzinie na TikToku... i na yt...",
  'Wywieszanie ulotek "Zaginęła osoba, która pytała. Prosimy o kontakt"...',
  "Pytanie mniejszości narodowych... i większości narodowych...",
  "Zbieranie informacji z nielegalnych źródeł... oo. darkweb :)...",
  "Proszenie o pomoc istot pozaziemskich... i nikogo więcej bo po co...",
  "Ruchanie ci matki... i ojca..."
];

function randomText(){
  let index = Math.floor(Math.random() * texts.length);
  let res = texts[index];

  texts.splice(index, 1); // remove

  return res;
}

function done(){
  $("#pre-kto").fadeOut();
  $("#after-kto").fadeIn();
}

$(document).ready(function(){
  $("#how-long").html(((Math.random() * 100) / 100 + 10).toFixed(5));

  // [sec]
  const INTERVAL = 2;
  const DURATION = 10

  let is_done = false;

  $("#progress-kto").animate({
    width: "100%"
  }, DURATION*1000);

  setTimeout(function(){
    done();
    is_done = true;
  }, DURATION*1000)

  setInterval(function(){
    if(is_done)
      return false;

    $("#text-random").html(randomText());
  }, INTERVAL*1000);
});
