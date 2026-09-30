import { config } from '../config'
import Icon from './Icon'
export default function Header() {
  return <header className="header"><div className="wrap hrow">
    <div className="logo"><b>{config.brand.toLowerCase()}</b><i /><span>{config.product}</span></div>
    <div className="hicons"><Icon n="lock" s={22} /><button className="menu" aria-label="Menu"><Icon n="menu" s={26} /></button></div>
  </div><div className="demo">Ambev S.A CNPJ 07.526.557/0001-00</div></header>
}
