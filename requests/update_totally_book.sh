curl -X PUT http://localhost:3000/api/auth/books/ID_DO_LIVRO \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","year":2017,"genre":"Software Architecture"}'
