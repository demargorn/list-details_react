import { useState, useEffect } from 'react';
import List from './List/List';
import Details from './Details/Details';
import './App.css';

const App = () => {
   const [users, setUsers] = useState([]); // список пользователей
   const [info, setInfo] = useState({}); // информация о пользователе
   const [isLoading, setIsLoading] = useState(false);

   const getUserProfile = async (id) => {
      if (info.id === id) {
         return;
      }

      setIsLoading(true);
      try {
         const res = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
         );

         if (!res.ok) {
            return new Error('Не удалось загрузить список пользователей');
         }

         const info = await res.json();
         setInfo(info);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      async function fetchData() {
         setIsLoading(true);
         try {
            const res = await fetch(
               'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
            );

            if (!res.ok) {
               return new Error('Не удалось загрузить список пользователей');
            }

            const users = await res.json();
            setUsers(users);
            setIsLoading(false);
         } catch (error) {
            console.log(error);
         }
      }

      fetchData();
   }, []);

   return (
      <main className='container container-md'>
         <List users={users} onFetchData={getUserProfile} />
         {isLoading && <>Loading...</>}
         {!info.id || !isLoading && <Details info={info} />}
      </main>
   );
};

export default App;
