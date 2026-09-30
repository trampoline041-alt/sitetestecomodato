import Icon from './Icon'
export type Tipo = 'CPF' | 'CNPJ'
export default function CadastroTypeSelector({ value, onChange }: { value: Tipo; onChange: (t: Tipo) => void }) {
  return <div className="seg" role="tablist">{(['CPF', 'CNPJ'] as Tipo[]).map(t =>
    <button key={t} role="tab" aria-selected={value === t} className={value === t ? 'on' : ''} onClick={() => onChange(t)} type="button">
      <Icon n={t === 'CPF' ? 'user' : 'building'} /> {t}</button>)}</div>
}
