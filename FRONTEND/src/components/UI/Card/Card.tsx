import  {FC} from 'react';

interface PROPS {
    title: string,
    description: string,
    image: string, 
    link: string, 
    speed:string,
    id: number
}

const Card: FC<PROPS> = ({title , description , image , link , speed , id}) => {
    return (
        <div className='card'>
            
        </div>
    );
};

export default Card;


