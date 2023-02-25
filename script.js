
const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const adsoyadInput = document.getElementById('adsoyad');
    const dogumtarihiInput = document.getElementById('dogumtarihi');
    const netucretInput = document.getElementById('netucret');
    const isgucukaybiInput = document.getElementById('isgucukaybi');
    const isgoremezliksuresiInput = document.getElementById('isgoremezliksuresi');
    const kazatarihiInput = document.getElementById('kazatarihi');
    const karsitaraftakusurInput = document.getElementById('karsitaraftakusur');
    const aciklamalarveolayTextarea = document.getElementById('aciklamalarveolay');
    const trafikKazasiRadio = document.getElementById('trafikKazasi');
    const isKazasiRadio = document.getElementById('isKazasi');
    const digerRadio = document.getElementById('diger');
    const yerlesikYargitayRadio = document.getElementById('yerlesikYargitay');
    const zmmsGenelSartlariRadio = document.getElementById('zmmsGenelSartlari');
    const herIkiKapsamRadio = document.getElementById('herIkiKapsam');
    
    // Konsola yazdırma
    console.log(adsoyadInput.value);
    console.log(dogumtarihiInput.value);
    console.log(netucretInput.value);
    console.log(isgucukaybiInput.value);
    console.log(isgoremezliksuresiInput.value);
    console.log(kazatarihiInput.value);
    console.log(karsitaraftakusurInput.value);
    console.log(aciklamalarveolayTextarea.value);
    console.log(trafikKazasiRadio.checked ? trafikKazasiRadio.value : '');
    console.log(isKazasiRadio.checked ? isKazasiRadio.value : '');
    console.log(digerRadio.checked ? digerRadio.value : '');
    console.log(yerlesikYargitayRadio.checked ? yerlesikYargitayRadio.value : '');
    console.log(zmmsGenelSartlariRadio.checked ? zmmsGenelSartlariRadio.value : '');
    console.log(herIkiKapsamRadio.checked ? herIkiKapsamRadio.value : '');

  });