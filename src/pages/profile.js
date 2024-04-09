
import { useParams} from 'react-router-dom'
export default function Profile() {
    const { name} = useParams();
    console.log(name);
    return(
      <div>
          <h4>
              Desde el Perfil de {name}
          </h4>
          
      </div>
    )
      
  }