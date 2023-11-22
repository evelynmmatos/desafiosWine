import Imagestar from '../assets/star.svg';
import ImageStarEmpty from '../assets/starEmpty.svg';

type Props = {
    rating: number | undefined
}

export const UseStars = ({rating}: Props) => {

    //Verifica se não é indefinido
    if(rating == undefined){
        return <div></div>
    }
  // Verifica se é um número válido
  if (isNaN(rating) || rating < 0 || rating > 5) {
    return <div>Classificação inválida</div>;
  }

  // Crie um array com base no valor 
  const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + rating + 1);



    return(
    <>
        {filledStars.map((star) => (
            <img src={Imagestar} alt="estrela" key={star} />
      ))}

       {emptyStars.map((star) => (
            <img src={ImageStarEmpty} alt="estrela" key={star} />
      ))}

      <p className="inline-block mr-2 ml-2 text-sm text-[#555]">({rating})</p>
    </>
    )
}