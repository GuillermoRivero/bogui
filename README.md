
# BoguiJS

### Travis State
Resultado de los test de integración continua: [![Build Status](https://magnum.travis-ci.com/GuillermoRivero/bogui.svg?token=hNHkxqxasKvM8hpD4xxp)](https://magnum.travis-ci.com/GuillermoRivero/bogui)
### Flujo de trabajo

Usar git Flow
- Rama Principal: Master
- Rama de desarrollo: Develop
- Añadir features: feature/nombre-de-la-rama


Hacer siempre un pull de develop antes de comenzar a trabajar en una nueva rama:
```sh
git pull origin develop
git flow feature start nombre-de-la-rama
```
Una vez terminados los cambios hacer un git pull y comprobar que no hay conflictos, después subir los cambios.

```sh
git add .
git commit -m "descripción de la tareae"
git push origin feature/nombre-de-la-rama
```
Hacer un pull request en github solicitando unir la rama de desarrollo con la rama master.