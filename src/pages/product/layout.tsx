import {
  HiOutlineListBullet,
  HiOutlinePlus,
  HiOutlineUser,
} from 'react-icons/hi2';
import { NavLink, Outlet } from 'react-router-dom';

const linkStyle =
  'flex h-10 items-center gap-2 px-4 rounded-sm hover:bg-zinc-200';

const sectionStyle = 'flex flex-col gap-2 w-full sm:w-fit';

export default function LayoutProduct() {
  return (
    <>
      <header className="flex w-full justify-center gap-2 border-b-2 p-2">
        <nav className="flex justify-center">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/user"
                className={linkStyle}
              >
                <HiOutlineUser />
                <span>Usuário</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={linkStyle}
              >
                <HiOutlineListBullet />
                <span>Produtos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                className={linkStyle}
              >
                <HiOutlinePlus />
                <span>Novo Produto</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex min-h-screen justify-center">
        <div className="w-full max-w-[1024px] py-4 sm:p-4">
          <Outlet />
        </div>
      </main>
      <footer className="flex w-full flex-col items-center gap-8 border-t-2 p-8">
        <div className="flex w-fit flex-wrap justify-center gap-8">
          <section className={sectionStyle}>
            <h3 className="w-max">Tecnologias</h3>
            <ol>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind</li>
            </ol>
          </section>
        </div>
        <p>&copy; Dimas Picinato - 2025 - Nenhum direito reservado</p>
      </footer>
    </>
  );
}
