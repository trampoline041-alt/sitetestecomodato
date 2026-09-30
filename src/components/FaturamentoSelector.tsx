const OPTS = [{ id: '0-10k', t: 'De R$ 0 a R$ 10 mil' }, { id: '10k-50k', t: 'De R$ 10 mil a R$ 50 mil' }, { id: '50k-100k+', t: 'De R$ 50 mil a R$ 100 mil +' }]
export default function FaturamentoSelector({ value, onChange, error }: { value: string; onChange: (v: string) => void; error?: boolean }) {
  return <fieldset className="fat"><legend>Qual seu faturamento mensal? *</legend>
    <div className="fgrid">{OPTS.map(o => <label key={o.id} className={'fcard' + (value === o.id ? ' on' : '')}>
      <input type="radio" name="fat" checked={value === o.id} onChange={() => onChange(o.id)} />
      <span className="dot" /><span><b>{o.t}</b></span></label>)}</div>
    {error && <small className="err">Selecione uma faixa de faturamento.</small>}</fieldset>
}
