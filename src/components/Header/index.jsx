import { Container, Mobile, Desktop, LogoWrapper, IconButtonWrapper, NewMealButtonWrapper, InputWrapper } from "./styles";
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
import { useSearch } from "../../hooks/search";

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
  function handleOpenOrderHistoryAdmin() {
    navigation("/history")
  }
  function handleOpenOrderHistory() {
    navigation("/history")
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
          {isAdmin ? <Logo isAdmin />: <Logo />}
        </LogoWrapper>

        {
          isAdmin
            ? <div className="holder">.</div>
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

        <InputWrapper>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            isSearch
          />
        </InputWrapper>

        {isAdmin
          ? <>
            <nav>
              <NewMealButtonWrapper>
                <Button
                  onClick={() => handleNavigationNewMeal()}
                  title="Novo prato"
                />
              </NewMealButtonWrapper>
              <ButtonText
                title="Pedidos"
                onClick={() => handleOpenOrderHistoryAdmin()}
              />

            </nav>
            <IconButton
              icon={ExitIcon}
              onClick={handleSignOut}
            />
          </>
          :
          <nav>
            <ButtonText
              title="Histórico de pedidos"
              onClick={() => handleOpenOrderHistory()}
            />
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