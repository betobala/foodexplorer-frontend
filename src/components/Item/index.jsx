import { Container, FavoriteIcon, PencilIcon, ItemName, Description, Price, ItemImage, ButtonWrapper } from "./styles";
import { IconButton } from "../IconButton";
import { Stepper } from "../Stepper"
import { Button } from "../Button";
import CaretRight from "../..//assets/icons/CaretRight.svg"
import FavoritedIcon from "../../assets/icons/HeartFilled.svg"
import notFavoritedIcon from "../../assets/icons/Heart.svg"
import Pencil from "../../assets/icons/Pencil.svg"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";



export function Item({ title, description, image: Image, price, isAdmin = false, id }){
  const [favorited, setFavorited] = useState()
  const [quantity, setQuantity] = useState(1)
  const [meal, setMeal] = useState({})
  const [cartId, setCartId] = useState()
  const navigate = useNavigate()
  const { user } = useAuth()



  function toogleFavorite(){

    if(favorited){
      handleRemoveFavorite(user.id, id)
      setFavorited(!favorited)
    }else{
      handleAddFavorite(user.id, id)
      setFavorited(!favorited)
    }
  }
  function handleEdit(meal_id){
    navigate(`/edit/${meal_id}`)
  }

  async function handleAddFavorite(user_id, meal_id){
    await api.post(`/favorites?user_id=${user_id}&meal_id=${meal_id}`)
  }

  async function handleRemoveFavorite(user_id, meal_id){
    await api.delete(`/favorites?user_id=${user_id}&meal_id=${meal_id}`)
  }

  async function handleAddToCart(cart_id, meal_id){
    try {
      await api.post(`/carts/${cart_id}`, {
        meal_id,
        price: meal.price,
        number_of_products: quantity
      })

      setQuantity(1)
      alert("Item adcionado ao carrinho.")

      
    } catch (error) {
      
    }

  }

  useEffect(() => {
    async function fetchCartId() {
      const response = await api.get(`/carts`)
      setCartId(response.data.id)
    }
    fetchCartId()
  }, [])

  useEffect(() => {
    async function isThisMealFavorited(user_id, meal_id){
      const response = await api.get(`/favorites?user_id=${user_id}&meal_id=${meal_id}`)
      const isFavorited = response.data.userFavorites
      isFavorited.map((favorited) => {
        if(favorited.id){
          setFavorited(true)
        }
      })
      
    }

    isThisMealFavorited(user.id, id)
  }, [])

  useEffect(() => {
    async function fetchMeal(meal_id){
      const response = await api.get(`/meals/${meal_id}`)
      setMeal(response.data)
      }
 
      fetchMeal(id)
  }, [])

  return(
  <Container>

    {
      isAdmin 
      ? <PencilIcon>
          <IconButton 
            onClick={() => handleEdit(id)}
            icon={Pencil}
          />
      </PencilIcon>

      : <FavoriteIcon>
        
        {favorited 
        ? 
        <IconButton
        icon={FavoritedIcon}
        onClick={() => toogleFavorite()}
        />
        :
        <IconButton
        icon={notFavoritedIcon}
        onClick={() => toogleFavorite()}
        />
      } 
      </FavoriteIcon>
    }
    <ItemImage to={`/details/${id}`}>
      <img src={Image}/>
    </ItemImage>

    <ItemName>
      <h1>{title}</h1>
    </ItemName>

    <Description>
      <p>{description}</p>
    </Description>

    <Price>
      <h2>{`${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}</h2>
    </Price>
    
    <ButtonWrapper>
    {
      isAdmin 
      ? <></>
      : <>
          <Stepper
           quantity={quantity}
           setQuantity={setQuantity}
          />
          <Button
           title="Incluir"
           onClick={() => handleAddToCart(cartId, id)}
          />
        </>
    }
    </ButtonWrapper>

  </Container>
  )
}