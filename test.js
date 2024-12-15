import {jwtDecode} from 'jwt-decode'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTczNDE0Njc2OX0.B0t2fwp0yIyfFFXVSHG9jldTJGD2IZL6VC8OUKjfSsI'
const decoded = jwtDecode(token);

console.log(decoded);
