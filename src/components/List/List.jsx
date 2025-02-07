import './List.css';

const List = ({ users, onFetchData }) => {

   return (
      <div className='list-group'>
         {users.map((user) => (
            <a
               href='#'
               className='list-group-item list-group-item-action'
               key={user.id}
               onClick={() => onFetchData(user.id)}
            >
               {user.name}
            </a>
         ))}
      </div>
   );
};

export default List;
