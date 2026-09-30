export const config = {
  brand: 'Sua Marca',
  product: 'Comodato',
  analysis: { status: 'Em andamento' as const },
}
export type CadastroPayload = { tipo: 'CPF' | 'CNPJ'; faturamento: string }
// Substituir por chamada real no futuro. Hoje: mock, sem envio de dados.
export async function submitCadastro(_p: CadastroPayload): Promise<{ status: 'em_analise' }> {
  return new Promise(r => setTimeout(() => r({ status: 'em_analise' }), 600))
}
