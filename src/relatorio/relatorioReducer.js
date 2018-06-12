import {
  LISTAR_CANCELADOS,
  LISTAR_CANCELADOS_POR_BAIRRO,
  LISTAR_FATURAMENTO,
  LISTAR_FATURAMENTO_POR_SERVICO,
  LISTAR_GASTOS_SERVICOS,
  LISTAR_GASTOS_SERVICOS_POR_SERVICO,
  LISTAR_LUCRO_MENSAL,
  LISTAR_LUCRO_MENSAL_POR_SERVICO,
  LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS,
  LISTAR_SATISFACAO_POR_PROFISSIONAL,
  LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_MEDIA_POR_SERVICOS,
  LISTAR_SATISFACAO_POR_SERVICO,
  LISTAR_SERVICOS,
  LISTAR_PROFISSIONAIS,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
  canceladosPorBairro: [],
  faturamento: [],
  faturamentoPorServico: [],
  gastosServicos: [],
  gastosServicosPorServico: [],
  lucroMensal: [],
  lucroMensalPorServico: [],
  satisfacaoMediaPorProfissionais: [],
  satisfacaoPorProfissional: [],
  satisfacaoMediaPorBairros: [],
  satisfacaoPorBairroCliente: [],
  satisfacaoPorServico: [],
  satisfacaoMediaPorServicos: [],
  listaServicos: [],
  listaBairros: [
    { Descricao: 'Boa Viagem' },
    { Descricao: 'Imbiribeira' },
    { Descricao: 'IPSEP' },
    { Descricao: 'Piedade' },
  ],
  listaProfissionais: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    case LISTAR_CANCELADOS_POR_BAIRRO:
      return { ...state, canceladosPorBairro: action.payload };
    case LISTAR_FATURAMENTO:
      return { ...state, faturamento: action.payload };
    case LISTAR_FATURAMENTO_POR_SERVICO:
      return { ...state, faturamentoPorServico: action.payload };
    case LISTAR_GASTOS_SERVICOS:
      return { ...state, gastosServicos: action.payload };
    case LISTAR_GASTOS_SERVICOS_POR_SERVICO:
      return { ...state, gastosServicosPorServico: action.payload };
    case LISTAR_LUCRO_MENSAL:
      return { ...state, lucroMensal: action.payload };
    case LISTAR_LUCRO_MENSAL_POR_SERVICO:
      return { ...state, lucroMensalPorServico: action.payload };
    case LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS:
      return { ...state, satisfacaoMediaPorProfissionais: action.payload };
    case LISTAR_SATISFACAO_POR_PROFISSIONAL:
      return { ...state, satisfacaoPorProfissional: action.payload };
    case LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE:
      return { ...state, satisfacaoMediaPorBairros: action.payload };
    case LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE:
      return { ...state, satisfacaoPorBairroCliente: action.payload };
    case LISTAR_SATISFACAO_MEDIA_POR_SERVICOS:
      return { ...state, satisfacaoMediaPorServicos: action.payload };
    case LISTAR_SATISFACAO_POR_SERVICO:
      return { ...state, satisfacaoPorServico: action.payload };
    case LISTAR_SERVICOS:
      return { ...state, listaServicos: action.payload };
    case LISTAR_PROFISSIONAIS:
      return { ...state, listaProfissionais: action.payload };
    default:
      return state;
  }
};
