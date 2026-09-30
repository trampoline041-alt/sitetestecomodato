import { useState } from 'react'
import CadastroTypeSelector, { Tipo } from './CadastroTypeSelector'
import FaturamentoSelector from './FaturamentoSelector'
import Icon from './Icon'
type F = { k: string; l: string; ph: string; mask?: (v: string) => string; ok: (v: string) => boolean; type?: string }
const d = (v: string) => v.replace(/\D/g, '')
const cpf = (v: string) => d(v).slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2')
const cnpj = (v: string) => d(v).slice(0, 14).replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2')
const tel = (v: string) => d(v).slice(0, 11).replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2')
const txt = (v: string) => v.trim().length >= 3
const mail = (v: string) => /^\S+@\S+\.\S+$/.test(v)
const ph = (v: string) => d(v).length >= 10
const COMMON: F[] = [{ k: 'email', l: 'E-mail', ph: 'exemplo@dominio.com', ok: mail, type: 'email' }, { k: 'cel', l: 'Celular', ph: '(00) 00000-0000', mask: tel, ok: ph, type: 'tel' }]
const FIELDS: Record<Tipo, F[]> = {
  CPF: [{ k: 'doc', l: 'CPF', ph: '000.000.000-00', mask: cpf, ok: v => d(v).length === 11 }, { k: 'nome', l: 'Nome completo', ph: 'Digite seu nome completo', ok: txt }, ...COMMON],
  CNPJ: [{ k: 'doc', l: 'CNPJ', ph: '00.000.000/0000-00', mask: cnpj, ok: v => d(v).length === 14 }, { k: 'razao', l: 'Razão social', ph: 'Digite a razão social', ok: txt }, { k: 'fantasia', l: 'Nome fantasia', ph: 'Digite o nome fantasia', ok: txt }, { k: 'resp', l: 'Nome do responsável', ph: 'Digite o nome do responsável', ok: txt }, ...COMMON],
}
export default function CadastroForm({ onSubmit }: { onSubmit: (t: Tipo, fat: string) => void }) {
  const [tipo, setTipo] = useState<Tipo>('CPF')
  const [vals, setVals] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState(false)
  const [fat, setFat] = useState('')
  const [busy, setBusy] = useState(false)
  const fields = FIELDS[tipo]
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setTouched(true)
    if (fields.every(f => f.ok(vals[f.k] ?? '')) && fat) { setBusy(true); onSubmit(tipo, fat) }
  }
  return <form className="card form" onSubmit={submit} noValidate>
    <span className="eyebrow dark">Solicite seu comodato</span>
    <h1>Faça seu cadastro</h1>
    <p className="lead">Escolha o tipo de cadastro que deseja realizar e preencha os dados solicitados.</p>
    <CadastroTypeSelector value={tipo} onChange={t => { setTipo(t); setVals({}); setTouched(false) }} />
    {fields.map(f => { const v = vals[f.k] ?? ''; const bad = touched && !f.ok(v); return <div className="field" key={tipo + f.k}>
      <label htmlFor={f.k}>{f.l} *</label>
      <input id={f.k} className={bad ? 'bad' : v && f.ok(v) ? 'good' : ''} type={f.type ?? 'text'} inputMode={f.mask ? 'numeric' : undefined} placeholder={f.ph} value={v} autoComplete="off"
        onChange={e => setVals({ ...vals, [f.k]: f.mask ? f.mask(e.target.value) : e.target.value })} />
      {bad && <small className="err">Verifique este campo.</small>}</div> })}
    <FaturamentoSelector value={fat} onChange={setFat} error={touched && !fat} />
    <button className="btn" disabled={busy}>{busy ? 'Enviando…' : <>Continuar <Icon n="arrow" s={20} /></>}</button>
    <p className="safe"><Icon n="lock" s={18} /> Seus dados estão seguros conosco.</p>
    <p className="login"><a href="#" onClick={e => e.preventDefault()}>Já tem cadastro? Entrar</a></p>
  </form>
}
