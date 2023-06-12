import { Container, Mobile, Desktop, LogoWrapper, IconButtonWrapper } from "./styles";
import { IconButton } from "../IconButton"
import { Button } from "../Button";
import { RequestButton_mobile } from "../RequestButton_mobile";
import { RequestButton } from "../RequestButton";
import { Logo } from "../Logo";
import { Input } from "../Input";
import MenuIcon from "../../assets/icons/Menu.svg";
import ExitIcon from "../../assets/icons/ExitIcon.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../ButtonText";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Header({ isAdmin = false }) {
  const { signOut } = useAuth()
  const navigation = useNavigate()
  const [cartId, setCartId] = useState()
  const [totalOfProducts, setTotalOfProducts] = useState(0)

  function handleSignOut() {
    navigation("/")
    signOut()
  }
  function handleNavigationNewMeal() {
    navigation("/new")
  }
  function handleOpenMenu() {
    navigation("/menu")
  }
  function handleOpenFavorites() {
    navigation("/favorites")
  }
  function handleOpenOrder() {
    navigation("/order")
  }

  async function fetchTotalOfProducts(cart_id) {
    const response = await api.get(`/carts/${cart_id}`)

    response.data.map((product) => (
      setTotalOfProducts(prevState => (prevState + 1))
    ))
  }

  useEffect(() => {
    async function fetchCart() {
      const response = await api.get(`/carts`)
      setCartId(response.data.id)
    }

    fetchCart()
  }, [])

  useEffect(() => {
    fetchTotalOfProducts(cartId)
  }, [cartId])


  return (
    <Container>

      <Mobile>
        <IconButtonWrapper>
          <IconButton
            icon={MenuIcon}
            onClick={() => handleOpenMenu()}
          />
        </IconButtonWrapper>

        <LogoWrapper to="/">
          {isAdmin ? <Logo isAdmin /> : <Logo />}
        </LogoWrapper>

        {
          isAdmin
                  ? <></>
                  : <RequestButton_mobile
                    onClick={() => handleOpenOrder()}
                    requests={totalOfProducts}
                  />
        }

      </Mobile>

      <Desktop>
        <LogoWrapper to="/">
          {isAdmin ? <Logo isAdmin /> : <Logo />}
        </LogoWrapper>

        <Input
          placeholder="Busque por pratos ou ingredientes"
          isSearch
        />
        {isAdmin
          ? <>
          <Button
            onClick={() => handleNavigationNewMeal()}
            title="Novo prato"
          />
          <ButtonText title="Histórico de pedidos" />
            </>
          :
            <nav>
              <ButtonText title="Histórico de pedidos" />
              <ButtonText
                title="Meus favoritos"
                onClick={() => handleOpenFavorites()}
              />
              <RequestButton
                onClick={() => handleOpenOrder()}
                requests={totalOfProducts}
              />
              <IconButton
                icon={ExitIcon}
                onClick={handleSignOut}
              />
            </nav>
          }


      </Desktop>

    </Container>
  )
}