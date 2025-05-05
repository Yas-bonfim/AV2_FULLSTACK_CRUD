curl -X POST http://localhost:3000/api/auth/books \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code", "author":"Robert C. Martin", "year":2008, "genre":"Software Engineering"}'
