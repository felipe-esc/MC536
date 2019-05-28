export class Paciente {
  constructor(
    public cpf: number,
    public tel: number,
    public email: string,
    public nome: string,
    public sexo: string,
    public alergias: string,
    public datanasc: number
  ){}
}
