export default class Mascara {
    static formatarRG(valor: string): string {
    
      const rgRegex = /^(\d{2})(\d{3})(\d{3})(\d{1})$/;
      const rgFormatado = valor.replace(rgRegex, "$1.$2.$3-$4");
      return rgFormatado;
    }
  
    static formatarCPF(valor: string): string {
        const numeros = valor.replace(/\D/g, ""); 
        const padrao = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
        return numeros.replace(padrao, "$1.$2.$3-$4");
    }
  
  static formatarTelefone(valor: string): string {
    const numeros = valor.replace(/\D/g, ""); 
    const padrao = /^(\d{2})(\d{5})(\d{4})$/;
    return numeros.replace(padrao, "($1) $2-$3");
  }
  }