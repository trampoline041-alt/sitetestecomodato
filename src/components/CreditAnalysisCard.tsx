import Icon from './Icon'
export default function CreditAnalysisCard({ onBack }: { onBack: () => void }) {
  return <div className="card analysis">
    <span className="bigring"><Icon n="doc" s={44} /></span>
    <h2>Análise de crédito em andamento</h2>
    <p className="lead c">Estamos verificando as informações cadastradas para avaliar a solicitação dos equipamentos de comodato.</p>
    <div className="notice"><Icon n="clock" s={34} /><div><b>Em breve você receberá a confirmação pelo WhatsApp.</b>
      <p>A confirmação informará se a solicitação poderá prosseguir para utilização dos equipamentos de comodato.</p></div></div>
    <div className="wa"><span><Icon n="wa" s={28} /></span><div><b>Fique atento ao seu WhatsApp!</b><small>Solicitação em análise — resultado em breve.</small></div></div>
    <button className="link" onClick={onBack}>← Voltar ao início da demonstração</button>
  </div>
}
