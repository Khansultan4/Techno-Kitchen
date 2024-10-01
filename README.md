# Techno-Kitchen
БД:
![alt text](readme-assets/1.png)
https://drawsql.app/teams/1-846/diagrams/3

Струткура сайта: 
https://excalidraw.com/#room=1d14a933887f23865596,Ugt6opjvRU17qwk3eTWGsQ

npx sequelize model:generate --name User --attributes login:string,email:string,password:string,role:string
npx sequelize model:generate --name Type --attributes title:string
npx sequelize model:generate --name Item --attributes title:string,price:integer,description:string,image:string,TypeId:integer,isInStock:boolean
npx sequelize model:generate --name Build --attributes UserId:integer,image:string,title:string,description:text
npx sequelize model:generate --name Rating --attributes UserId:integer,BuildId:integer,score:integerscore:integer
npx sequelize model:generate --name Comment --attributes UserId:integer,BuildId:integer,content:text
npx sequelize model:generate --name ItemBundle --attributes BuildId:integer,ItemId:integer

