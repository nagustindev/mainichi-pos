import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopAppBar() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-card px-6 shrink-0 select-none">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white shadow-sm">
            M
          </span>
          <h1 className="text-lg font-bold tracking-tight text-foreground">
            Mainichi POS
          </h1>
        </div>
        <nav className="ml-6 hidden gap-6 md:flex">
          <ul className="flex gap-6 text-sm font-medium text-muted-foreground">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Reportes</a>
            </li>
            <li>
              <a href="#">Admin</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <Button variant="default" size="default">
            Cerrar Caja
          </Button>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/nagustindev.png"
                    alt="nagustindev"
                  />
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuItem>Ajustes</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
