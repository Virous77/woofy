import Link from 'next/link';
import { validateRequest } from '@/lib/auth';
import NavbarAction from './navbar-action';

const Navbar = async () => {
  const { user, session } = await validateRequest();

  return (
    <nav className="fixed left-1/2 top-10 z-[20] m-auto flex w-[95%] -translate-x-1/2 -translate-y-1/2 transform  items-center justify-between rounded-[30px] bg-muted px-4 py-2 md:w-[80%]">
      <div>
        <Link href="/">
          <h1 className="cursor-pointer font-mono text-2xl">Woofy</h1>
        </Link>
      </div>

      <NavbarAction
        user={{
          id: user?.id?.toString() || '',
          email: user?.email,
          image: user?.image,
          name: user?.name,
          bio: user?.bio,
          username: user?.username,
        }}
        value={session?.id || ''}
      />
    </nav>
  );
};

export default Navbar;
