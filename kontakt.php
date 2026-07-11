<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#anfrage', true, 303);
    exit;
}

function clean(string $value, int $max = 5000, bool $singleLine = true): string {
    $value = trim(strip_tags($value));
    if ($singleLine) {
        $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    }
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
}

// Unsichtbares Spam-Feld: Bots füllen es häufig aus.
if (!empty($_POST['website'] ?? '')) {
    http_response_code(204);
    exit;
}

$name = clean((string)($_POST['name'] ?? ''), 120);
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$telefon = clean((string)($_POST['telefon'] ?? ''), 80);
$datum = clean((string)($_POST['datum'] ?? ''), 30);
$anlass = clean((string)($_POST['anlass'] ?? ''), 100);
$gaeste = clean((string)($_POST['gaeste'] ?? ''), 100);
$ort = clean((string)($_POST['ort'] ?? ''), 240);
$paket = clean((string)($_POST['paket'] ?? ''), 100);
$nachricht = clean((string)($_POST['nachricht'] ?? ''), 5000, false);
$datenschutz = (string)($_POST['datenschutz'] ?? '');

if ($name === '' || $email === false || $datum === '' || $anlass === '' || $ort === '' || $nachricht === '' || $datenschutz !== 'akzeptiert') {
    header('Location: /?error=1#anfrage', true, 303);
    exit;
}

$to = 'marcelreifenstein@yahoo.com';
$subjectPlain = 'Neue DJ-Anfrage: ' . $anlass . ' am ' . $datum;
$subject = '=?UTF-8?B?' . base64_encode($subjectPlain) . '?=';

$body = "Neue Anfrage über djreifi.de\n\n"
      . "Name: {$name}\n"
      . "E-Mail: {$email}\n"
      . "Telefon: " . ($telefon !== '' ? $telefon : '-') . "\n"
      . "Datum: {$datum}\n"
      . "Anlass: {$anlass}\n"
      . "Gäste: " . ($gaeste !== '' ? $gaeste : 'Noch unklar') . "\n"
      . "Ort: {$ort}\n"
      . "Paket: " . ($paket !== '' ? $paket : 'Noch unklar') . "\n\n"
      . "Nachricht:\n{$nachricht}\n\n"
      . "Datenschutzhinweis bestätigt: ja\n"
      . "Gesendet am: " . date('d.m.Y H:i') . "\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: DJ Reifi Website <no-reply@djreifi.de>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));
header('Location: /?' . ($sent ? 'sent=1' : 'error=1') . '#anfrage', true, 303);
exit;
