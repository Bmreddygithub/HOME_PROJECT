# HOME_PROJECT
myHome Project
run mongodb > mongod
run mongo > mongo
run nodejs > node server
npm start


C:\Users\BhargaviPro>mongoimport --db UJJWALA_HOME_DB --collection restaurants -
-file G:\study\UJJWALA_HOME_DB\users.metadata.json

C:\Users\BhargaviPro>mongorestore --drop -d UJJWALA_HOME_DB -c users G:\study\UJ
JWALA_HOME_DB\users.bson

Google Cloud Command
--------------------
>gcloud app deploy
>gcloud app browse



MISC details
------------

mongodb://<dbuser>:<dbpassword>@ds135537.mlab.com:35537/ujjwala_home_db

mongodb://bmreddy573:bmreddy573@ds135537.mlab.com:35537/ujjwala_home_db



mongo ds135537.mlab.com:35537/ujjwala_home_db -u <dbuser> -p <dbpassword>


$ URI=bmreddy573:bmreddy573@ds135537.mlab.com
$ DBPORT=35537
$ sed -i -- "s/localhost:27017/$URI:$DBPORT/g" app.js