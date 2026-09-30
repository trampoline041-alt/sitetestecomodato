const OPTS = [{ id: 'mensal', t: 'R$ 0 / R$ 10.000,00' d: 'Modalidade em destaque' }, { id: 'outra', t: 'R$10.000,00 / 100k +', d: 'Condições sob consulta' }]
export default function FaturamentoSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return <fieldset className="fat"><legend>Qual seu faturamento mensal? *</legend>
    <p className="hint">Selecione a modalidade de faturamento desejada para sua solicitação de comodato.</p>
    <div className="fgrid">{OPTS.map(o => <label key={o.id} className={'fcard' + (value === o.id ? ' on' : '') + (o.id === 'mensal' ? ' star' : '')}>
      <input type="radio" name="fat" checked={value === o.id} onChange={() => onChange(o.id)} />
      <span className="dot" /><span><b>{o.t}</b><small>{o.d}</small></span></label>)}</div></fieldset>
}
