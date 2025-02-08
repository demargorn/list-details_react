# User List

**Реализуем следующее приложение: список с пользователями, в котором при клике на пользователя рядом появляется окно, отображающее детальную информацию о нём**

![alt text](public/example.png)

При первой загрузке ни один из элементов не выбран, поэтому отображается только список:

## Механика

-  При загрузке приложения один раз делается запрос по адресу https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json и отрисовывается список в компоненте List.

-  При клике на конкретный элемент списка в компонент Details передаётся один props: info (объект с полями id и name) и начинается загрузка данных по адресу: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, где {id} — это ID пользователя из props.
