curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code", "author":"Robert C. Martin", "year":2008, "genre":"Software Engineering"}'
