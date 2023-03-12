import Postagem from './Postagem';
interface Usuer {
  id: number
  nome: string
  usuario: string
  foto: string
  senha: string
  postagem?: Postagem[]
}

export default Usuer
