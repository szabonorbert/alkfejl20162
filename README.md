# Mafia startup todo

Ha a szervezett bűnözésnek készítenénk todo rendszert, természetesen nem így csinálnánk. Ez inkább szimuláció.

##Funkcionális követelmények
*Vendégként:*

+ szeretném látni az aktuális feladatok listáját (rejtett szöveggel)
+ szeretnék regisztrálni, hogy családtagként én is elvégezhessek feladatokat


*Felhasználóként:*

+ szeretnék belépni az oldalra
+ szeretném elolvasni a feladat címét, pontos leírását és nehézségét
+ szeretném elvégezni a feladatot
+ szeretném a jelszavamat megváltoztatni
+ szeretnék feladatot hozzáadni
+ szretnék feladatot törölni (csak sajátot)
+ szeretném megnézni az elvégzett feladatok listáját
+ szeretnék kijelentkezni


##Nem funkcionális követelmények

+ Felhasználóbarát
+ Biztonságos
+ Gyors hozzáférés


##Use-case
![Use-case](readme_img/usecase.png)

##Adatmodellek
![Data](readme_img/data.png)

##Szerepkörök
+ *Vendég:* megnézheti az aktuális feladatok listáját és a feladatokhoz tartozó nehézséget (de nem láthatja a feladat címét és leírását, ez "titkos"). Ezenkívül regésztrálhat a családba, hogy ő is hozzájárulhasson a "cég" tevékenységéhez.
+ *Családtag:* láthatja az aktuális teljes feladatlistát, azaz címeket, leírásokat és nehézségeket. Feladatot jelölhet elvégzettnek, új feladatot adhat hozzá, saját maga által hozzáadott feladatokat törölhet, megnézheti az eddig elvégzett feladatok listáját.


##Oldaltérkép
**Publikus:**
+ Feladatlista (hiányzó leírás)
+ Bejelentkezés
+ Regisztráció

**Családtag:**
+ Feladatlista (teljes)
  + Feladat elvégzése
  + Feladat hozzáadása
  + Feladat törlése (csak saját)
+ Profiladatok
  + Jelszómódosítás
+ Kijelentkezés

##Rettenetesen bonyolult folyamatok
Új feladat hozzáadása  
![New task](readme_img/newtask.png)  
Feladat elvégzése  
![Done task](readme_img/donetask.png)  
Felhasználó bejelentkezése  
![User login](readme_img/user.png)

##Végpontok
+ **GET/:** feladatlista megtekintése
+ **GET/reg:** regisztrációs oldal megtekintése
+ **POST/reg:** regisztrációs kérés küldése
+ **GET/login:** bejelentkező oldal megtekintésée
+ **POST/login:** bejelentkezési adatok küldése
+ **GET/logout:** kijelentkezés kérése
+ **GET/do/:id:** feladatelvégzés jelentésének kérése
+ **GET/del/:id:** feladattörlés kérése
+ **GET/history:** elvégzett feladatok listájának megtekintése
+ **GET/password:** jelszómódosító oldal megtekintése
+ **POST/password:** jelszófrissítés küldése
+ **GET/add:** feladathozzáadás oldalának megtekintése
+ **POST/add:** feladathozzáadás kérésének küldés


##Vázlatok
Jelszómódosítás
![Tasklist](readme_img/view1.png)  
Feladat hozzáadása  
![Add task](readme_img/view2.png)  
Elvégzett feladatok listája
![Edit profile](readme_img/view3.png)