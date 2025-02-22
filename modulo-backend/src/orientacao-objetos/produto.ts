class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getPreco(): number {
      return this.preco;
    }
  
    public setPreco(preco: number): void {
      if (preco >= 0) {
        this.preco = preco;
      }
    }
  
    public getQuantidade(): number {
      return this.quantidade;
    }
  
    public setQuantidade(quantidade: number): void {
      if (quantidade >= 0) {
        this.quantidade = quantidade;
      }
    }
  
    public calcularValorTotal(): number {
      return this.preco * this.quantidade;
    }
  
    public estaDisponivel(): boolean {
      return this.quantidade > 0;
    }
  }
  
  const produto = new Produto("Notebook", 3500, 5);
  console.log(produto.calcularValorTotal()); 
  console.log(produto.estaDisponivel()); 
  