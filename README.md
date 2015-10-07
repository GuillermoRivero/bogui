
# BoguiJS

### Travis State
Resultado de los test de integración continua: [![Build Status](https://magnum.travis-ci.com/GuillermoRivero/bogui.svg?token=hNHkxqxasKvM8hpD4xxp)](https://magnum.travis-ci.com/GuillermoRivero/bogui)
### Flujo de trabajo

Usar git Flow
- Rama Principal: Master (NUNCA TOCAR ESTA RAMA)
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
git commit -m "descripción de la tarea"
git push origin feature/nombre-de-la-rama
```
Hacer un pull request en github solicitando unir la rama de desarrollo con la rama master. Si la rama pasa los test y los administradores consideran adecuado añadirla al código se mezclará en los próximos días.

Una vez mezclado en develop se actualizará automáticamente el servidor de staging, y cuando los administradores testeen que todo funciona correctamente el código pasará al servidor principal.
