import BoxItem from "./BoxItem";

const Checkboxes = () => {
  return (
    <div>
      <BoxItem labelTxt={'Include Uppercase Letters'} option='uppercase' />
      <BoxItem labelTxt={'Include Lowercase Letters'} option='lowercase' />
      <BoxItem labelTxt={'Include Numbers'} option='numbers' />
      <BoxItem labelTxt={'Include Symbols'} option='symbols' />   
    </div>
  )
}

export default Checkboxes;