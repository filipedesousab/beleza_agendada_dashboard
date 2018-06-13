import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterCanceladosPorBairro } from '../canceladosActions';

const CancelamentosPorServico = (props) => {
  const chartData = {
    labels: _.keys(props.canceladosPorBairro),
    datasets: [
      {
        label: 'Cancelamentos por bairro',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: _.values(props.canceladosPorBairro),
      },
    ],
  };

  return (
    <Grid cols="12 12 6 6">
      <Box title="Cancelamentos por bairro" type="warning">
        <ChartBar data={chartData} style={{ width: '100%' }} />
        <select onChange={e => props.obterCanceladosPorBairro(e.target.value)}>
          <option value="">Selecione um serviço</option>
          {props.listaBairros.map(bairro => (
            <option key={bairro.Descricao} value={bairro.Descricao}>
              {bairro.Descricao}
            </option>
          ))}
        </select>
      </Box>
    </Grid>
  );
};

const mapStateToProps = state => ({
  listaBairros: state.relatorio.listaBairros,
  canceladosPorBairro: state.relatorio.canceladosPorBairro,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterCanceladosPorBairro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CancelamentosPorServico);
