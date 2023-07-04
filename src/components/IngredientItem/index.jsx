import { Container } from './styles'
import CloseIcon from "../../assets/icons/Close.svg"
import PlusIcon from "../../assets/icons/Plus.svg"

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew &&
        <input
          type="text"
          value={value}
          readOnly={!isNew}
          {...rest} />
      }
      {!isNew &&
        <div
          title={value}
          className='elipsis'
        >
          {value}
        </div>
      }

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : 'button-delete'}
      >
        {isNew ? <img src={PlusIcon} /> : <img src={CloseIcon} />}
      </button>
    </Container>
  )
}