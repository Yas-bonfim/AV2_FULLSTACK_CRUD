
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"ana","email":"ana@email.com","password":"123456"}'


curl -X POST https://av-2-full-stack-inky.vercel.app/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Ana","email":"ana@email.com","password":"123456"}'
