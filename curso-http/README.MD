BACK: npm run start-auth<br/>
FRONT: npm start<br/>
<br/>
gerar chave privada e certificado https:<br/>
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt