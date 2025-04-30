import idPhoto from '../assets/idPhoto.jpg';

function HeaderPoster({posterTitle,posterSubtitle,name,race,parentName,age,story}) {

    return (<div>

        <img src={idPhoto} alt='Grand-doggy'></img>
         <h1>{posterTitle}</h1>
         <p>{posterSubtitle}</p>
         <p>{name}</p>
         <p>{race}</p>
         <p>{parentName}</p>
         <p>{age}</p>
         <p>{story}</p>

    </div>)
   
}

export default HeaderPoster;