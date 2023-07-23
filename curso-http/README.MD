BACK: npm run start-auth<br/>
FRONT: npm start<br/>
<br/>

- Gerar chave privada e certificado https no back:<br/>
  openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt<br/>
  <br/>

- Alterar porta de execução no react e executar em https:
  1º criar um arquivo .env na raiz<br/>
  2º colocar: PORT=NUMERO_DA_PORTA<br/>
  3º colocar: HTTPS=true<br/>
  <br/>

