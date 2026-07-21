# DJ Reifi – Website für GitHub Pages

Diese Version enthält:

- aufgeräumte, responsive Startseite
- getrennte Anfragearten für DJ-Dienstleistung und Technikmiete
- kein PDF-Download und keine PDF-Datei im Projekt
- Musikwunschseite mit Veranstaltungscode, Vorname, Interpret, Titel, Priorität 1–10, Likes und 10-Minuten-Sperre
- geschützten Verwaltungsbereich unter `/admin/`
- GitHub-Pages-Dateien `CNAME` und `.nojekyll`

## 1. Auf GitHub hochladen

Den **Inhalt dieses Ordners** in das Hauptverzeichnis des Repositorys laden. Danach unter `Settings → Pages` den Branch `main` und `/(root)` auswählen.

## 2. Anfrageformular

Ohne externen Formulardienst öffnet das Formular das E-Mail-Programm des Besuchers. Für direkten Versand im Browser:

1. Kostenloses Formular bei Formspree anlegen.
2. Zieladresse `marcelreifenstein@yahoo.com` bestätigen.
3. In `assets/js/config.js` den erhaltenen Endpunkt bei `formspreeEndpoint` eintragen.

## 3. Firebase für Musikwünsche

1. In der Firebase-Konsole ein Projekt erstellen.
2. Eine Web-App hinzufügen.
3. Die angezeigten Konfigurationswerte in `assets/js/config.js` einsetzen.
4. Unter **Authentication → Sign-in method** aktivieren:
   - E-Mail/Passwort
   - Anonym
5. Unter **Authentication → Users** den Admin-Nutzer `marcelreifenstein@yahoo.com` mit einem sicheren Passwort anlegen.
6. Eine Firestore-Datenbank erstellen.
7. Den Inhalt von `firestore.rules` in **Firestore Database → Rules** einfügen und veröffentlichen.
8. In **Firestore Database → Indexes** bei einer Fehlermeldung den von Firebase angebotenen Index-Link öffnen. Für die privaten Wünsche wird gewöhnlich ein Index für `ownerUid` + `createdAt` benötigt.

## 4. Wichtige rechtliche Platzhalter

Vor Veröffentlichung in `impressum.html` und `datenschutz.html` die vollständige ladungsfähige Anschrift ergänzen. Nach Aktivierung von Formspree und Firebase muss die Datenschutzerklärung fachlich angepasst werden.

## 5. Technische Einschränkung

GitHub Pages kann kein PHP ausführen. Deshalb wurde `kontakt.php` entfernt. Die Webseite nutzt entweder den E-Mail-Fallback oder nach Konfiguration Formspree.
