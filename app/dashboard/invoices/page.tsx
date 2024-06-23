'use client';
 
import { useState } from 'react';
import axios from 'axios';
 
export default function CriarProdutoPage() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
 
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:1337/api/produtos', {
        data: {
          nome,
          descricao,
          preco,
        },
      });
 
      console.log('Produto criado:', response.data);
      // Limpar os campos após a criação do produto
      setNome('');
      setDescricao('');
      setPreco('');
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
    }
  };
 
  return (
    <div>
      <h1>Criar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}
 