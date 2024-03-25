uglifyjs /app/dist/ajcontainer/main-es2020.js -o /app/dist/ajcontainer/main-es2020.js -c -m
sed -i 's/:"librarayname1-libraray1-module"/:"\/librarayname1\/librarayname1-librarayname1-module"/' /app/dist/ajcontainer/runtime-es2020.js
sed -i 's/:"config-config-module"/:"\/config\/config-config-module"/' /app/dist/ajcontainer/runtime-es2020.js
sed -i 's/:"onboard-onboard-module"/:"\/onboard\/onboard-onboard-module"/' /app/dist/ajcontainer/runtime-es2020.js