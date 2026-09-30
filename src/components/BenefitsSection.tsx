import Icon from './Icon'
const B = [['box', 'Equipamentos de qualidade', 'Cervejeiras, freezers e muito mais.'], ['hand', 'Suporte especializado', 'Estamos com você em todas as etapas.'], ['chart', 'Mais vendas para o seu negócio', 'Uma estrutura pensada para apoiar o seu negócio.']]
export default function BenefitsSection() {
  return <section className="hero">
    <span className="eyebrow">Comodato de equipamentos</span>
    <h2>Mais que bebidas, parcerias que crescem juntas.</h2>
    <p className="sub">Cadastre-se para solicitar equipamentos de comodato e impulsione o seu negócio.</p>
    <div className="bens">{B.map(([i, t, s]) => <div className="ben" key={t}><span className="ring"><Icon n={i} s={26} /></span><b>{t}</b><small>{s}</small></div>)}</div>
    <p className="script">Juntos pelo seu sucesso!</p>
  </section>
}
