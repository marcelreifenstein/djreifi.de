/**
 * DJ Reifi – zentrale Konfiguration
 *
 * 1) FORMSPREE_ENDPOINT:
 *    Trage hier später deinen Formspree-Endpunkt ein, z. B.
 *    https://formspree.io/f/abcdwxyz
 *    Solange der Wert leer bleibt, öffnet das Anfrageformular als Fallback
 *    das E-Mail-Programm des Besuchers.
 *
 * 2) FIREBASE_CONFIG:
 *    Ersetze die Platzhalter mit den Werten aus der Firebase-Konsole.
 */
window.DJ_REIFI_CONFIG = {
  contactEmail: "marcelreifenstein@yahoo.com",
  formspreeEndpoint: "",
  adminEmail: "marcelreifenstein@yahoo.com",
  firebase: {
    apiKey: "HIER_EINTRAGEN",
    authDomain: "HIER_EINTRAGEN",
    projectId: "HIER_EINTRAGEN",
    storageBucket: "HIER_EINTRAGEN",
    messagingSenderId: "HIER_EINTRAGEN",
    appId: "HIER_EINTRAGEN"
  }
};
