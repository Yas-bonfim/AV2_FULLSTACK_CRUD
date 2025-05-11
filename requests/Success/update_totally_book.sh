curl -X PUT http://localhost:3000/api/books/681d30c3c5e6d558a2b31747 \
  -H "Authorization: Bearer <token> " 
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","year":2017,"genre":"Software Architecture"}'


curl -X PUT https://av-2-fullstack-crud.vercel.app/api/books/bookid \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","year":2017,"genre":"Software Architecture"}'
