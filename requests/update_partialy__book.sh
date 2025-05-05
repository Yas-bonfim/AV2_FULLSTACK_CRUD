curl -X PATCH http://localhost:3000/api/auth/books/ID_DO_LIVRO \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"year":2020}'
