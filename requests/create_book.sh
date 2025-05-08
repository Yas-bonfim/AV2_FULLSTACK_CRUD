curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWJkNTAyM2MxMzVmOWI3NjhjZWVlMSIsImVtYWlsIjoiYW5hQGVtYWlsLmNvbSIsImlhdCI6MTc0NjcyMzQyMiwiZXhwIjoxNzQ2NzI3MDIyfQ.avdkxfOIoVKU5t3GXDu0D0H0KNmGVUPxyJUkhuqMmOI" \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code", "author":"Robert C. Martin", "year":2008, "genre":"Software Engineering"}'
