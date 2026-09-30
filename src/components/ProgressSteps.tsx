import Icon from './Icon'
const S = [['user', 'Cadastro', 'Concluído', 'done'], ['doc', 'Documentos', 'Concluído', 'done'], ['card', 'Análise de crédito', 'Em andamento', 'now'], ['check', 'Resultado', 'Em breve', 'next']]
export default function ProgressSteps() {
  return <ol className="steps">{S.map(([i, t, s, st]) => <li key={t} className={st}>
    <span className="ring"><Icon n={i} s={24} />{st === 'done' && <em className="tick"><Icon n="check" s={10} /></em>}</span>
    <b>{t}</b><small>{s}</small></li>)}</ol>
}
