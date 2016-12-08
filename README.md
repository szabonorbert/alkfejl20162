# Mafia startup todo

Ha a szervezett bűnözésnek készítenénk todo rendszert, természetesen nem így csinálnánk. Ez inkább szimuláció.

##Funkcionális követelmények
*Vendégként:*

+ szeretném látni az aktuális feladatokat felsorolva (rejtett szöveggel) és azok nehézségét
+ szeretnék regisztrálni, hogy családtagként én is végezhessek feladatot


*Felhasználóként:*

+ szeretnék belépni az oldalra
+ szeretném elolvasni a feladat címét, pontos leírását és nehézségét
+ szeretném elvégezni a feladatot
+ szeretném a jelszavamat megváltoztatni
+ szeretnék feladatot hozzáadni
+ szeretném megnézni az elvégzett feladatok listáját
+ szeretnék kijelentkezni


##Nem funkcionális követelmények

+ Felhasználóbarát
+ Biztonságos
+ Gyors hozzáférés


##Use-case
![Use-case](https://github.com/szabonorbert/alkfejl20162/blob/master/readme_img/usecase.png)

##Adatmodellek
![Data](https://github.com/szabonorbert/alkfejl20162/blob/master/readme_img/data.png)

##Szerepkörök
+ *Vendég:* megnézheti az aktuális feladatok listáját és a feladatokhoz tartozó nehézséget (de nem láthatja a feladat címét és leírását, ez "titkos"). Ezenkívül regésztrálhat a családba, hogy ő is hozzájárulhasson a "cég" tevékenységéhez.
+ *Családtag:* láthatja az aktuális teljes feladatlistát, azaz címeket, leírásokat és nehézségeket. Feladatot jelölhet elvégzettnek, új feladatot adhat hozzá, saját feladatait törölheti, megnézheti az eddig elvégzett feladatok listáját.
+ 
##Oldaltérkép
**Publikus:**
+ Feladatlista (csak nehézség)
+ Bejelentkezés
+ Regisztráció

**Családtag:**
+ Feladatlista (teljes)
  + Feladat elvégzése
+ Profiladatok
  + Profil szerkesztése
+ Kijelentkezés

**Családfő:**
+ Feladatlista (teljes)
  + Feladat elvégzése
  + Feladat hozzáadása
+ Elvégzett feladatok listája
+ Profiladatok
  + Profil szerkesztése
+ Kijelentkezés

##Rettenetesen bonyolult folyamatok
Új feladat hozzáadása  
![New task](https://github.com/szabonorbert/alkfejl2016/blob/master/newtask.png)  
Feladat elvégzése  
![Done task](https://github.com/szabonorbert/alkfejl2016/blob/master/donetask.png)  
Felhasználó bejelentkezése  
![User login](https://github.com/szabonorbert/alkfejl2016/blob/master/user.png)

##Végpontok
+ **GET/:** feladatlista megtekintése
+ **POST/:** feladat elvégzésének beküldése
+ **GET/reg:** regisztrációs oldal megtekintése
+ **POST/reg:** regisztrációs kérés küldése
+ **GET/login:** bejelentkező oldal
+ **POST/login:** bejelentkezési adatok küldése
+ **GET/profile:** profil megtekintése
+ **POST/profile:** profil frissítése
+ **GET/add:** új feladat hozzáadásának űrlapja
+ **POST/add:** új feladat beküldése
+ **GET/history:** elvégzett feladatok listája

##Vázlatok
Főoldal, feladatlista  
![Tasklist](https://github.com/szabonorbert/alkfejl2016/blob/master/view1.png)  
Feladat hozzáadása  
![Add task](https://github.com/szabonorbert/alkfejl2016/blob/master/view2.png)  
Felhasználó profiljának szerkesztése  
![Edit profile](https://github.com/szabonorbert/alkfejl2016/blob/master/view3.png)