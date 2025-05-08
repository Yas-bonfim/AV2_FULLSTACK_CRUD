curl -X PATCH http://localhost:3000/api/books/book_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"year":2020}'
