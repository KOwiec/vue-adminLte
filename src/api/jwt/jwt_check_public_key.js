// DEMO
const jwt = require('jsonwebtoken') ;
const publicKey = require('public.js') ;

const token =  `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9
.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MjA3NDU4NiwiZXhwIjoxNTYyMDc4MTg2LCJuYmYiOjE1NjIwNzQ1ODYsImp0aSI6IkpjVm1CV0l1aFBNZUtKREkiLCJzdWIiOjEsInBydiI6ImY5MzA3ZWI1ZjI5YzcyYTkwZGJhYWVmMGUyNmYwMjYyZWRlODZmNTUiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSJ9
.wvvqn40ajF4yhxTH51-BcC6xjB1_NdhB8RixTpIMvM-r3ZpP0M6JR20uXFK1PoFni
-c7tzyGniLKTL9qQtc3E7pqRmM8oHNhQb5Lo1pjdfhl9C7SDZUakFIVPygszvyiTwWkuUnNkWQ9
-wjg1DM_L8BwMdBD5VBjqh8KIvdger9Ydsn308W6a7xnhBXvVxZk8ZGOCjj6GYw0w9
-vV23cEoJHnNZ146R29dElzfkR55rq6990Ghzo89vnrCJx3n3M1vb00CJI
-QsErhPi6FHl2oqDWqA7z_sbjdEraODvoaO3DmNE5qHDiEriVnb3B2FAb2cWNCcsv5Wz7GhPWGNOZHERXnn8SktduVGVVIkOoCBMPRoZbZsLo37Za3tWXytFkF60H4XyDxufGyWqJBIoub3IRpu9iAXRSV8zugGPW44V717JdIBjkQ
-_wkWHrYMSf01AZ0l7jdPBmj_DKNK3aeF-7tnFx3acCfSdWNVq_J
-cHw7CzcPY2e6xylqtV3SyAV46b11tydV7cW-d6bAR7sM_GD6RnvQozje4SDCutqhJx6akiMgBHZiVVbmpZ6C3FLi4sC_jkqYhUzkyF5KtEQ4QB6qTZBV7ebbICMWek4yzTUBSvNYohchzmyt7xEqvYv
-A_nv127mcgZf4AUtPybgYj5q1wO5WFOoTk_zUnDU`;

jwt.verify(token, publicKey, (err, decodedToken) => {
    console.log(err);
    console.log(decodedToken);
});



