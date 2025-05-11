curl -X PUT http://localhost:3000/api/books/663abfc9d1734b003bc99999 \
  -H "Authorization: Bearer TOKEN_DO_USUÁRIO_ERRADO" \
  -H "Content-Type: application/json" \
  -d '{"title": "Tentativa de atualização indevida"}'
