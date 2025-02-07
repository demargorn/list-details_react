import './Details.css';

const Details = ({ info }) => {
   return (
      <div className='card'>
         <img src={info.avatar} className='card-img-top' alt='...' />
         <div className='card-body'>
            <h5 className='card-title'>{info.name}</h5>
         </div>
         <ul className='list-group list-group-flush'>
            <li className='list-group-item'>City: {info.details.city}</li>
            <li className='list-group-item'>Company: {info.details.company}</li>
            <li className='list-group-item'>Position: {info.details.position}</li>
         </ul>
      </div>
   );
};

export default Details;
