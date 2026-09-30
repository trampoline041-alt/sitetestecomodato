import { useState } from 'react'
import Header from './components/Header'
import CadastroForm from './components/CadastroForm'
import BenefitsSection from './components/BenefitsSection'
import ProgressSteps from './components/ProgressSteps'
import CreditAnalysisCard from './components/CreditAnalysisCard'
import Footer from './components/Footer'
import { submitCadastro } from './config'
export default function App() {
  const [screen, setScreen] = useState<'cadastro' | 'analise'>('cadastro')
  const go = async (tipo: 'CPF' | 'CNPJ', faturamento: string) => { await submitCadastro({ tipo, faturamento }); setScreen('analise'); window.scrollTo(0, 0) }
  return <><Header />
    <main className="wrap screen" key={screen}>
      {screen === 'cadastro' ? <div className="grid"><BenefitsSection /><CadastroForm onSubmit={go} /></div> :
        <div className="anal"><span className="eyebrow">Análise de crédito</span><h1 className="w">Estamos analisando seu cadastro.</h1>
          <p className="sub">Essa etapa é importante para avaliar a solicitação de equipamentos de comodato.</p>
          <ProgressSteps /><CreditAnalysisCard onBack={() => setScreen('cadastro')} /></div>}
    </main><Footer /></>
}
