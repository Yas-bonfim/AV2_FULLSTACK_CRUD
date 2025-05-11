curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Livro sem token", "author": "Autor Anônimo"}'
