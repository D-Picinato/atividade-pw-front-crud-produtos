import { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';

import { Product } from '@/@types/product';

import { Button } from '@/components/ui/button';

export default function ListProductPage() {
  const [products] = useState<Product[]>([
    { cod: 1, name: 'Produto', qtd: 10, price: 10 },
  ]);

  return (
    <div className="flex flex-col gap-4">
      <h1>Produtos</h1>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th>
              <h4>Cod</h4>
            </th>
            <th>
              <h4>Nome</h4>
            </th>
            <th>
              <h4>Qtd.</h4>
            </th>
            <th>
              <h4>Preço</h4>
            </th>
            <th>
              <h4>Ação</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(v => (
            <tr>
              <td>{v.cod}</td>
              <td>{v.name}</td>
              <td>{v.qtd}</td>
              <td>R$ {v.price}</td>
              <td>
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <HiOutlinePencil />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
