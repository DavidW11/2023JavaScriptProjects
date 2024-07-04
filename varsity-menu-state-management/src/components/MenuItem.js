import React from 'react'

const MenuItem = props => {

  const [selected, setSelected] = React.useState(false);

  const toggleSelected = () => {
    if(!selected) {
      props.updatePurchasedItems({
        name : props.name,
        price : props.price,
      })
    }
    else {
      props.removePurchasedItem({
        name : props.name,
      })
    }
    
    setSelected(!selected);
  }

  return (
    <button 
      class={selected ? 'menu-item selected' : 'menu-item'}
      onClick={toggleSelected}
    >
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  )
}
  
export default MenuItem
