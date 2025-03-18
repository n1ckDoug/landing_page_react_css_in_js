import { Container } from '../../styles';
import {
  ContatoContainer,
  BarraTitulo,
  FormularioItem,
  BotaoCadastrar,
  ContatoInfo,
} from './styles';

// Componentes
import Titulo from '../Titulo';

const Contato = () => (
  <Container>
    <Titulo fontSize={48}>Entre em Contato</Titulo>
    <BarraTitulo>a</BarraTitulo>
    <ContatoContainer>
      <form action="">
        <FormularioItem>
          <label>
            Seu nome<span>*</span>
          </label>
          <input type="text" />
        </FormularioItem>
        <FormularioItem>
          <div className="flexContato">
            <div className="formEmail">
              <label>
                Seu e-mail<span>*</span>
              </label>
              <input type="email" />
            </div>
            <div>
              <label>
                Seu telefone<span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>
        </FormularioItem>
        <FormularioItem>
          <label>Mensagem</label>
          <textarea></textarea>
        </FormularioItem>
        <BotaoCadastrar type="submit">Enviar</BotaoCadastrar>
      </form>
      <ContatoInfo>
        <div className="formInfo">
          <h1>Fale conosco</h1>
          <p>
            Nos envie uma mensagem preenchendo o formulário, entraremos em
            contato o mais rápido possível!
          </p>
        </div>
        <div className="formInfo">
          <p>Se preferir, tire sua dúvidas através do telefone:</p>
          <h1>(99) 9999-9999</h1>
        </div>
      </ContatoInfo>
    </ContatoContainer>
  </Container>
);

export default Contato;
