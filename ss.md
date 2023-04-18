1. Crear rama

        git branch <nombre>

2. Cambiarse a rama

        git checkout <rama>

3. Picar código
4. Subir cambios
        
        git commit -m "mensaje"
        git push ecorp <rama>

5. Cambiarse de rama a una superior

        git checkout <rama> (master)

6. Mergear

        git merge <rama inferior> (ofi)

7. Pullear master en la rama

        git checkout ofi
        git pull (ecorp) <master>