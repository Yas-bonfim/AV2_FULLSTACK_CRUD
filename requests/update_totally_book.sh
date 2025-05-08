curl -X PUT http://localhost:3000/api/books/bookid \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","year":2017,"genre":"Software Architecture"}'
