import { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { Product } from '@/@types/product';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ListProductPage() {
  const [products] = useState<Product[]>([
    { cod: 1, name: 'Smartphone Galaxy S23', qtd: 15, price: 4999.99 },
    { cod: 2, name: 'Notebook Dell XPS', qtd: 8, price: 7599.99 },
    { cod: 3, name: 'Mouse Gamer RGB', qtd: 30, price: 199.9 },
    { cod: 4, name: 'Teclado Mecânico', qtd: 20, price: 399.9 },
    { cod: 5, name: 'Monitor 27" 4K', qtd: 12, price: 2499.99 },
    { cod: 6, name: 'Headset Bluetooth', qtd: 25, price: 299.9 },
    { cod: 7, name: 'Webcam HD', qtd: 18, price: 159.9 },
    { cod: 8, name: 'SSD 1TB', qtd: 40, price: 599.9 },
    { cod: 9, name: 'Placa de Vídeo RTX 4070', qtd: 5, price: 4299.99 },
    { cod: 10, name: 'Memória RAM 32GB DDR5', qtd: 22, price: 899.9 },
    { cod: 11, name: 'Gabinete Gamer RGB', qtd: 15, price: 449.9 },
    { cod: 12, name: 'Fonte 850W Gold', qtd: 10, price: 799.9 },
    { cod: 13, name: 'Tablet iPad Pro', qtd: 7, price: 8499.99 },
    { cod: 14, name: 'Impressora Laser', qtd: 6, price: 1299.9 },
    { cod: 15, name: 'Roteador Wi-Fi 6', qtd: 14, price: 899.9 },
    { cod: 16, name: 'Câmera DSLR', qtd: 4, price: 3299.9 },
    { cod: 17, name: 'Processador Ryzen 9', qtd: 6, price: 3699.9 },
    { cod: 18, name: 'Cooler CPU RGB', qtd: 25, price: 299.9 },
    { cod: 19, name: 'Pendrive 256GB', qtd: 45, price: 129.9 },
    { cod: 20, name: 'HD Externo 4TB', qtd: 12, price: 699.9 },
    { cod: 21, name: 'Cadeira Gamer', qtd: 8, price: 1499.9 },
    { cod: 22, name: 'Mousepad XL', qtd: 35, price: 89.9 },
    { cod: 23, name: 'Placa Mãe Z790', qtd: 7, price: 2899.9 },
    { cod: 24, name: 'Nintendo Switch OLED', qtd: 10, price: 2399.9 },
    { cod: 25, name: 'Microfone Blue Yeti', qtd: 9, price: 999.9 },
    { cod: 26, name: 'AirPods Pro', qtd: 15, price: 1899.9 },
    { cod: 27, name: 'Caixa de Som JBL', qtd: 20, price: 599.9 },
    { cod: 28, name: 'Carregador USB-C 100W', qtd: 30, price: 249.9 },
    { cod: 29, name: 'Hub USB 7 Portas', qtd: 22, price: 159.9 },
    { cod: 30, name: 'SmartWatch Galaxy', qtd: 11, price: 1999.9 },
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
            <tr key={v.cod}>
              <td>{v.cod}</td>
              <td>{v.name}</td>
              <td>{v.qtd}</td>
              <td>R$ {v.price}</td>
              <td>
                <Link to={`/update/${v.cod}`}>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <HiOutlinePencil />
                  </Button>
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <HiOutlineTrash />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Deseja remover o produto?</DialogTitle>
                      <DialogDescription>
                        O produto que será excluído não poderá ser recuperado!
                        <br />
                        Deseja mesmo remover {v.name}?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose>
                        <Button variant="ghost">Cancelar</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button>Remover</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
