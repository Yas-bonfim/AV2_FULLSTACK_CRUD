curl -X PATCH http://localhost:3000/api/books/681d30c3c5e6d558a2b31747 \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"year":2020}'


curl -X PATCH https://av-2-fullstack-crud.vercel.app/api/books/book_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"year":2020}'
