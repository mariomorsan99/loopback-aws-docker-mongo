# loopback-app

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

------EC2-DOCKER-MONGODB-NODEJS

Creamos una instancia Ec2 con nuestro usuario de iam
airy
admin
en el grupo de seguridad habilitamos todas las conecciones

en putty entramos por ssh instalamos docker
SET UP THE REPOSITORY
https://docs.docker.com/engine/install/ubuntu/

en el ssh vemos si ya esta docker comando
docker images

docker pull mongo descarga una imagen

docker run -p 27017:27017 -d --name mongoserver mongo

docker ps --- para ver si ya esta levantado

en Robo3t agregamos la coneccion con la ip publica que nos da la instancia Ec2
y el puerto 27017 para mongo

una vez conectados agregamos un usuario con contraseña

ya en nodejs loopback

ejemplo de cadena
const config = {
name: 'mongoaws',
connector: 'mongodb',
url: '',
host: '3.129.45.99',
port: 27017,
user: 'AdminMongoDb',
password: 'lunasa19',
database: 'hospitalDB',
useNewUrlParser: true
};

si no la reconoce npm test para limpiar y reconstruir
